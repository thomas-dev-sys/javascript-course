'use strict';
console.log('Mapty OOP Foundation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    // Store the coordinates as an array of latitude and longitude
    this.coords = coords;
    // Store distance in kilometers
    this.distance = distance;
    // Store duration in minutes
    this.duration = duration;
  }

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // Generate a decription using workout type and current date
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    // Store the cadence (steps per minute)
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('=== RUNNING WORKOUT ===');
console.log('Distance:', run1.distance, 'km');
console.log('Duration:', run1.duration, 'min');
console.log('Cadence:', run1.cadence, 'spm');
console.log('Pace:', run1.pace.toFixed(1), 'min/km');
console.log('Description:', run1.description);
console.log('ID:', run1.id);

const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('=== CYCLING WORKOUT ===');
console.log('Distance:', cycling1.distance, 'km');
console.log('Duration:', cycling1.duration, 'min');
console.log('Elevation Gain:', cycling1.elevationGain, 'm');
console.log('Speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Description:', cycling1.description);
console.log('ID:', cycling1.id);

console.log('=== INHERITANCE TESTING ===');
console.log(
  'Both inherit from Workout:',
  run1 instanceof Workout,
  cycling1 instanceof Workout
);

// Main form element
const form = document.querySelector('.form');
// Container workout list
const containerWorkouts = document.querySelector('.workouts');
// Input type
const inputType = document.querySelector('.form__input--type');
// Input distance
const inputDistance = document.querySelector('.form__input--distance');
// Input duration
const inputDuration = document.querySelector('.form__input--duration');
// Input cadence
const inputCadence = document.querySelector('.form__input--cadence');
// Input elevation
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    console.log('App is starting');
    this._getPosition();

    // Attach event handler to form submission
    form.addEventListener('submit', this._newWorkout.bind(this));
    // Attach event handler for wrokout type change
    inputType.addEventListener('change', this._toggleElevationField);

    // Add click handling for workout list items
    containerWorkouts.addEventListener('click', this.moveToPopUp.bind(this));

    document.addEventListener('keydown', this._handleKeyDown.bind(this));
  }

  _handleKeyDown(e) {
    if (e.key === 'Escape' && !form.classList.contains('hidden')) {
      this._hideForm();
      console.log('Form hidden via Escape key');
    }
  }

  _moveToPopup(e) {
    // Find the closes workout element from the clicked target
    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) return;

    // Find the workout obkect using the data-id attribute
    const workout = this.#workouts.find (
      work => work.id === workoutEl.dataset.id
    );

    // Move the map to the workout coordinates
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    console.log(`Navigated to ${workout.type} workout at`, workout.coords);
  }

  _getPosition() {
    if (navigator.geolocation) {
      console.log('🔍 Requesting user location...');
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        this._handleLocationError.bind(this),
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 600000,
        }
      );
    } else {
      alert('❌ Geolocation is not supported by this browser');
      this._loadDefaultMap();
    }
  }

  _handleLocationError(error) {
    console.error('Geolocation error:', error);

    let message = 'Could not get your position. ';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        message +=
          'Location access was denied. Please enable location services and refresh the page.';
        break;
      case error.POSITION_UNAVAILABLE:
        message += 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        message += 'Location request timed out.';
        break;
      default:
        message += 'An unknown error occurred.';
        break;
    }

    alert(`📍 ${message}`);
    this._loadDefaultMap();
  }

  _loadDefaultMap() {
    console.log('Loading default map location (Manila)');

    // Put the actual coodinates
    const defaultCoords = [14.604287, 120.994483];

    // From const map
    // From 13 to this.#mapZoomLevel
    this.#map = L.map('map').setView(defaultCoords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://{s}.tile.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this._renderStoredWorkout();

    console.log('Default map loaded successfully');
  }

  _loadMap(position) {
    // Extract coordinates from geolocation position
    const { latitude, longitude } = position.coords;
    // Console test loading map
    console.log(`Loading map at coordinates: ${latitude}, ${longitude}`);

    // Create coordinate array for leaflet to understand
    const coords = [latitude, longitude];

    // Initialize the map centered at user's location with a zoom level 13
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    // Add openstreetmap
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://{s}.tile.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Add a marker blue
    L.marker(coords).addTo(this.#map).bindPopup('You are here!').openPopup;

    // Remove the map event listener
    this.#map.on('click', this._showForm.bind(this));

    this._renderStoredWorkout();

    console.log('Map loaded successfully at user location');
  }

  _renderStoredWorkout() {
    this.#workouts.forEach(workout => {
      this._renderWorkoutMarker(workout);
      this._renderWorkout(workout);
    });

    if (this.#workouts.length > 0) {
      console.log('Rendered ${this.#workouts.length} stored workouts');
    }
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    // Turn on or display the elevation
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    // Turn off or hide the input cadence
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _newWorkout(e) {
    // Helper function
    // Validate input that they are actual number that make sense
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    // Validate numbers are positive
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    // Prevent the default from submission behavior
    e.preventDefault();

    // Store data or extract data
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // Handle running working
    if (type === 'running') {
      const cadence = +inputCadence.value;

      // Valid all input element are finite, positive, working
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs must be positive numbers!');

      // Create the running object with map coordinates and form data
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      // Valid all input element are finite, positive, working
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs must be positive numbers!');
      // Create the running object with map coordinates and form data
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    this.#workouts.push(workout);

    this._renderWorkoutMarker(workout);

    this._renderWorkout(workout);

    this._setLocalStorage();

    this._hideForm();

    this._setLocalStorage();
  }

  _renderWorkout(workout) {
    // Create the base html
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>`;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>`;

    form.insertAdjacentHTML('afterend', html);
  }

  _renderWorkoutMarker(workout) {
    const marker = L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();

    marker.on('click', () => {
      console.log(`Navigated to ${workout.type} workout at`, workout.coords);
    });
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;

    this.#workouts = data.map(work => {
      if (work.type === 'running') {
        const workout = new Running(
          work.coords,
          work.distance,
          work.duration,
          work.cadence
        );
        workout.id = work.id;
        workout.date = new Date(work.date);
        return workout;
      }
      if (work.type === 'cycling') {
        const workout = new Cycling(
          work.coords,
          work.distance,
          work.duration,
          work.elevationGain
        );
        workout.id = work.id;
        workout.date = new Date(work.date);
        return workout;
      }
    });

    this.#workouts.forEach(work => this._renderWorkout(work));
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
console.log('Hour 2 complete!');

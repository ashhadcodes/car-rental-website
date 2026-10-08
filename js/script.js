/**
 * CarGo — Modern Car Rental Platform
 * Pure Vanilla JavaScript (ES6+)
 * Production-Quality Architecture
 */

// ==========================================================================
// 1. CAR FLEET DATA (Realistic Dummy Data)
// ==========================================================================
const CARS_DATA = [
  {
    id: 'car-1',
    name: 'Toyota Corolla',
    brand: 'Toyota',
    category: 'Economy',
    pricePerDay: 49,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid / Petrol',
    mileage: '38 MPG',
    rating: 4.85,
    reviewsCount: 164,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80',
    features: ['Apple CarPlay', 'Toyota Safety Sense', 'Bluetooth', 'Backup Camera', 'Adaptive Cruise Control', 'USB-C Charging Ports']
  },
  {
    id: 'car-2',
    name: 'Honda Civic',
    brand: 'Honda',
    category: 'Sedan',
    pricePerDay: 59,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: '36 MPG',
    rating: 4.88,
    reviewsCount: 192,
    image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=800&q=80',
    features: ['Honda Sensing', 'Lane Keeping Assist', 'Blind Spot Monitor', 'Apple CarPlay & Android Auto', 'Keyless Ignition', 'Dual-Zone Climate']
  },
  {
    id: 'car-3',
    name: 'Toyota Fortuner',
    brand: 'Toyota',
    category: 'SUV',
    pricePerDay: 95,
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    mileage: '28 MPG',
    rating: 4.90,
    reviewsCount: 118,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    features: ['4x4 Terrain System', '7 Passenger Seating', 'Roof Rails', 'Leather Seats', 'Hill Descent Assist', 'Front & Rear Parking Sensors']
  },
  {
    id: 'car-4',
    name: 'Hyundai Tucson',
    brand: 'Hyundai',
    category: 'SUV',
    pricePerDay: 75,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    mileage: '37 MPG',
    rating: 4.87,
    reviewsCount: 145,
    image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=800&q=80',
    features: ['Panoramic Sunroof', 'Smart Cruise Control', 'Hands-Free Smart Liftgate', 'Wireless Charging', 'Heated Front Seats', 'Navigation System']
  },
  {
    id: 'car-5',
    name: 'BMW 5 Series',
    brand: 'BMW',
    category: 'Luxury',
    pricePerDay: 135,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol Turbo',
    mileage: '30 MPG',
    rating: 4.94,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    features: ['Harman Kardon Sound', 'Head-Up Display', 'BMW Live Cockpit Pro', 'Adaptive LED Headlights', 'Leather Vernasca Interior', 'Parking Assistant Plus']
  },
  {
    id: 'car-6',
    name: 'Mercedes-Benz C-Class',
    brand: 'Mercedes-Benz',
    category: 'Luxury',
    pricePerDay: 125,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Mild Hybrid',
    mileage: '31 MPG',
    rating: 4.92,
    reviewsCount: 184,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    features: ['Burmester 3D Audio', 'Active Ambient Lighting', 'MBUX Augmented Video', 'Fingerprint Scanner', 'Heated & Ventilated Seats', 'Active Brake Assist']
  },
  {
    id: 'car-7',
    name: 'Porsche 911 Carrera',
    brand: 'Porsche',
    category: 'Sports',
    pricePerDay: 289,
    seats: 4,
    transmission: 'PDK Automatic',
    fuel: 'Twin-Turbo Petrol',
    mileage: '24 MPG',
    rating: 4.98,
    reviewsCount: 312,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    features: ['Sport Chrono Package', 'Active Suspension (PASM)', 'Sport Exhaust System', 'Bose Surround Sound', '14-Way Power Sport Seats', 'Carbon Interior Trim']
  },
  {
    id: 'car-8',
    name: 'Tesla Model 3 Long Range',
    brand: 'Tesla',
    category: 'Electric',
    pricePerDay: 89,
    seats: 5,
    transmission: 'Single-Speed Auto',
    fuel: '100% Electric',
    mileage: '341 mi Range',
    rating: 4.93,
    reviewsCount: 275,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80',
    features: ['Autopilot Included', '15.4" Center Touchscreen', 'Supercharging Capable', 'Premium Audio 17-Speakers', 'Glass Panoramic Roof', 'Phone Key Access']
  },
  {
    id: 'car-9',
    name: 'Ford Mustang GT Convertible',
    brand: 'Ford',
    category: 'Sports',
    pricePerDay: 149,
    seats: 4,
    transmission: 'Automatic',
    fuel: '5.0L V8 Petrol',
    mileage: '24 MPG',
    rating: 4.89,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80',
    features: ['Power Drop Top', 'Active Valve Exhaust', 'Brembo Brakes', 'B&O Sound System', 'Selectable Drive Modes', 'Sync 4 Infotainment']
  },
  {
    id: 'car-10',
    name: 'Audi RS e-tron GT',
    brand: 'Audi',
    category: 'Electric',
    pricePerDay: 240,
    seats: 5,
    transmission: '2-Speed Automatic',
    fuel: '100% Electric',
    mileage: '249 mi Range',
    rating: 4.96,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800&q=80',
    features: ['637 HP Boost Mode', 'quattro All-Wheel Drive', 'Bang & Olufsen 3D Sound', 'Matrix LED Headlights', 'Adaptive Air Suspension', '800V Ultra-Fast Charging']
  }
];

// ==========================================================================
// 2. DOM CONTENT LOADED - MAIN INITIALIZER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initCarFleet();
  initRentalCalculator();
  initBookingSearch();
  initModals();
  initStatisticsCounter();
  initTestimonialsSlider();
  initFaqAccordion();
  initContactForm();
  initNewsletterForm();
  initBackToTop();
  setupDefaultDates();
});

// ==========================================================================
// 3. THEME TOGGLE (DARK / LIGHT MODE WITH LOCALSTORAGE)
// ==========================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem('cargo_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('cargo_theme', newTheme);
    updateThemeIcon(newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
  });
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  if (theme === 'dark') {
    // Sun icon for dark mode (click to switch to light)
    themeToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
  } else {
    // Moon icon for light mode (click to switch to dark)
    themeToggleBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
  }
}

// ==========================================================================
// 4. NAVIGATION BAR & MOBILE MENU
// ==========================================================================
function initNavigation() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile Hamburger Toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isActive = navMenu.classList.contains('active');
      if (isActive) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      } else {
        navMenu.classList.add('active');
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
      }
    });

    // Close menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });

    // Close menu on resize above mobile
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  }
}

// Highlight active navigation link on scroll
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const matchingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
      if (matchingLink) matchingLink.classList.add('active');
    }
  });
}

// ==========================================================================
// 5. CAR FLEET DISPLAY, SEARCH & FILTERING
// ==========================================================================
let currentCategoryFilter = 'All';
let currentSearchTerm = '';

function initCarFleet() {
  renderCarsGrid();

  // Category filter tabs
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategoryFilter = btn.getAttribute('data-category');
      renderCarsGrid();
    });
  });

  // Keyword search input
  const carSearchInput = document.getElementById('carSearchInput');
  if (carSearchInput) {
    carSearchInput.addEventListener('input', (e) => {
      currentSearchTerm = e.target.value.trim().toLowerCase();
      renderCarsGrid();
    });
  }
}

function renderCarsGrid() {
  const carsContainer = document.getElementById('carsGrid');
  if (!carsContainer) return;

  const filtered = CARS_DATA.filter((car) => {
    // Match category
    const matchesCategory = currentCategoryFilter === 'All' || car.category === currentCategoryFilter;
    // Match search term
    const matchesSearch = !currentSearchTerm || 
      car.name.toLowerCase().includes(currentSearchTerm) ||
      car.brand.toLowerCase().includes(currentSearchTerm) ||
      car.category.toLowerCase().includes(currentSearchTerm);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    carsContainer.innerHTML = `
      <div class="empty-state">
        <h3>No vehicles found</h3>
        <p>No cars matched your current filter criteria. Try choosing another category or clearing your search.</p>
        <button type="button" class="btn btn-secondary btn-sm" onclick="resetCarFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  carsContainer.innerHTML = filtered.map((car) => `
    <div class="car-card" data-id="${car.id}">
      <div class="car-image-container">
        <img src="${car.image}" alt="${car.name}" loading="lazy">
        <span class="car-category-badge">${car.category}</span>
        <span class="car-rating-pill">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          ${car.rating}
        </span>
      </div>

      <div class="car-card-body">
        <div class="car-header">
          <div class="car-brand">${car.brand}</div>
          <h3 class="car-title">${car.name}</h3>
        </div>

        <div class="car-specs-grid">
          <div class="car-spec-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>${car.seats} Seats</span>
          </div>

          <div class="car-spec-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            <span>${car.transmission.split(' ')[0]}</span>
          </div>

          <div class="car-spec-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 22v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8"></path>
              <path d="M14 9V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v17"></path>
            </svg>
            <span>${car.fuel.split(' ')[0]}</span>
          </div>
        </div>

        <div class="car-card-footer">
          <div class="car-price">
            <span class="price-amount">$${car.pricePerDay}</span>
            <span class="price-period">/ day</span>
          </div>

          <div class="car-actions">
            <button type="button" class="btn btn-secondary btn-sm" onclick="openCarDetailsModal('${car.id}')">
              View Details
            </button>
            <button type="button" class="btn btn-primary btn-sm" onclick="selectCarForBooking('${car.id}')">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

window.resetCarFilters = function() {
  currentCategoryFilter = 'All';
  currentSearchTerm = '';
  const searchInput = document.getElementById('carSearchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === 'All');
  });
  renderCarsGrid();
};

// ==========================================================================
// 6. CAR DETAILS MODAL
// ==========================================================================
let activeModalCar = null;

window.openCarDetailsModal = function(carId) {
  const car = CARS_DATA.find((c) => c.id === carId);
  if (!car) return;

  activeModalCar = car;
  const modal = document.getElementById('carDetailsModal');
  const modalBody = document.getElementById('carDetailsModalBody');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <img src="${car.image}" alt="${car.name}" class="modal-car-image">
    
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
      <div>
        <span style="font-size: 0.8125rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">${car.brand} • ${car.category}</span>
        <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-main); margin-top: 2px;">${car.name}</h2>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 1.85rem; font-weight: 800; color: var(--primary);">$${car.pricePerDay}</span>
        <span style="font-size: 0.8125rem; color: var(--text-muted); display: block;">/ day</span>
      </div>
    </div>

    <div class="modal-car-highlights">
      <div class="modal-highlight-box">
        <span>Capacity</span>
        <strong>${car.seats} Passengers</strong>
      </div>
      <div class="modal-highlight-box">
        <span>Transmission</span>
        <strong>${car.transmission}</strong>
      </div>
      <div class="modal-highlight-box">
        <span>Fuel / Powertrain</span>
        <strong>${car.fuel}</strong>
      </div>
      <div class="modal-highlight-box">
        <span>Economy / Range</span>
        <strong>${car.mileage}</strong>
      </div>
    </div>

    <h4 style="font-size: 0.9375rem; font-weight: 700; color: var(--text-main); margin-top: 20px;">Standard Inclusions & Features:</h4>
    <div class="modal-features-list">
      ${car.features.map(f => `
        <div class="modal-feature-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${f}</span>
        </div>
      `).join('')}
    </div>

    <div style="padding-top: 20px; border-top: 1px solid var(--border-color); display: flex; justify-content: flex-end; gap: 12px;">
      <button type="button" class="btn btn-secondary" onclick="closeModal('carDetailsModal')">Close</button>
      <button type="button" class="btn btn-primary" onclick="bookCarFromModal('${car.id}')">Book This Car</button>
    </div>
  `;

  openModal('carDetailsModal');
};

window.bookCarFromModal = function(carId) {
  closeModal('carDetailsModal');
  selectCarForBooking(carId);
};

// ==========================================================================
// 7. RENTAL PRICE CALCULATOR
// ==========================================================================
function initRentalCalculator() {
  const calcCarSelect = document.getElementById('calcCarSelect');
  const calcPickupDate = document.getElementById('calcPickupDate');
  const calcReturnDate = document.getElementById('calcReturnDate');
  const calcInsurance = document.getElementById('calcInsurance');
  const calcGps = document.getElementById('calcGps');
  const calcChildSeat = document.getElementById('calcChildSeat');
  const proceedBtn = document.getElementById('calcProceedBtn');

  if (!calcCarSelect) return;

  // Populate cars dropdown
  calcCarSelect.innerHTML = CARS_DATA.map(
    (car) => `<option value="${car.id}">$${car.pricePerDay}/day — ${car.name} (${car.category})</option>`
  ).join('');

  // Attach event listeners for real-time recalculation
  [calcCarSelect, calcPickupDate, calcReturnDate, calcInsurance, calcGps, calcChildSeat].forEach((el) => {
    if (el) el.addEventListener('change', updateCalculatorSummary);
  });

  if (proceedBtn) {
    proceedBtn.addEventListener('click', () => {
      const selectedCarId = calcCarSelect.value;
      const pickupDate = calcPickupDate.value;
      const returnDate = calcReturnDate.value;

      if (!pickupDate || !returnDate) {
        showToast('Please select valid rental dates first', 'error');
        return;
      }

      openBookingModalWithData({
        carId: selectedCarId,
        pickupDate,
        returnDate,
        insurance: calcInsurance.checked,
        gps: calcGps.checked,
        childSeat: calcChildSeat.checked
      });
    });
  }

  updateCalculatorSummary();
}

function updateCalculatorSummary() {
  const calcCarSelect = document.getElementById('calcCarSelect');
  const calcPickupDate = document.getElementById('calcPickupDate');
  const calcReturnDate = document.getElementById('calcReturnDate');
  const calcInsurance = document.getElementById('calcInsurance');
  const calcGps = document.getElementById('calcGps');
  const calcChildSeat = document.getElementById('calcChildSeat');

  if (!calcCarSelect || !calcPickupDate || !calcReturnDate) return;

  const car = CARS_DATA.find((c) => c.id === calcCarSelect.value) || CARS_DATA[0];
  const pickup = new Date(calcPickupDate.value);
  const dropoff = new Date(calcReturnDate.value);

  // Validate dates
  let days = 1;
  const invalidDates = isNaN(pickup.getTime()) || isNaN(dropoff.getTime()) || dropoff < pickup;

  if (!invalidDates) {
    const diffTime = Math.abs(dropoff - pickup);
    days = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  }

  const baseRateTotal = car.pricePerDay * days;
  
  let addonsTotal = 0;
  if (calcInsurance && calcInsurance.checked) addonsTotal += 20 * days;
  if (calcGps && calcGps.checked) addonsTotal += 8 * days;
  if (calcChildSeat && calcChildSeat.checked) addonsTotal += 10 * days;

  const subtotal = baseRateTotal + addonsTotal;
  const taxes = Math.round(subtotal * 0.08); // 8% standard local taxes & hub fees
  const total = subtotal + taxes;

  // Update DOM receipt
  const carNameEl = document.getElementById('calcSummaryCarName');
  const carImageEl = document.getElementById('calcSummaryCarImage');
  const daysEl = document.getElementById('calcSummaryDays');
  const baseCostEl = document.getElementById('calcSummaryBaseCost');
  const addonsCostEl = document.getElementById('calcSummaryAddonsCost');
  const taxesEl = document.getElementById('calcSummaryTaxes');
  const totalCostEl = document.getElementById('calcSummaryTotalCost');

  if (carNameEl) carNameEl.textContent = `${car.brand} ${car.name}`;
  if (carImageEl) carImageEl.src = car.image;
  if (daysEl) daysEl.textContent = `${days} ${days === 1 ? 'Day' : 'Days'}`;
  if (baseCostEl) baseCostEl.textContent = `$${baseRateTotal}`;
  if (addonsCostEl) addonsCostEl.textContent = `$${addonsTotal}`;
  if (taxesEl) taxesEl.textContent = `$${taxes}`;
  if (totalCostEl) totalCostEl.textContent = `$${total}`;
}

// ==========================================================================
// 8. BOOKING SEARCH BOX (HERO PANEL)
// ==========================================================================
function initBookingSearch() {
  const searchBtn = document.getElementById('heroSearchBtn');
  const pickupLoc = document.getElementById('searchPickupLoc');
  const dropoffLoc = document.getElementById('searchDropoffLoc');
  const pickupDate = document.getElementById('searchPickupDate');
  const returnDate = document.getElementById('searchReturnDate');
  const carType = document.getElementById('searchCarType');
  const feedback = document.getElementById('searchFeedback');

  if (!searchBtn) return;

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!pickupLoc.value) {
      showSearchError('Please choose a Pick-up Location.');
      pickupLoc.focus();
      return;
    }

    if (!pickupDate.value) {
      showSearchError('Please select a Pick-up Date.');
      pickupDate.focus();
      return;
    }

    if (!returnDate.value) {
      showSearchError('Please select a Return Date.');
      returnDate.focus();
      return;
    }

    const start = new Date(pickupDate.value);
    const end = new Date(returnDate.value);

    if (end < start) {
      showSearchError('Return Date cannot be before Pick-up Date.');
      returnDate.focus();
      return;
    }

    // Clear error
    if (feedback) {
      feedback.className = 'search-feedback success';
      feedback.textContent = `Found matching available cars in ${pickupLoc.value}!`;
      feedback.style.display = 'block';
    }

    // Set filter category if selected
    if (carType && carType.value !== 'All') {
      currentCategoryFilter = carType.value;
      document.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-category') === carType.value);
      });
      renderCarsGrid();
    }

    showToast(`Searching ${carType.value === 'All' ? 'all' : carType.value} cars in ${pickupLoc.value}...`, 'success');

    // Smooth scroll down to the cars section
    const carsSection = document.getElementById('cars');
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  function showSearchError(msg) {
    if (feedback) {
      feedback.className = 'search-feedback error';
      feedback.textContent = msg;
      feedback.style.display = 'block';
    }
    showToast(msg, 'error');
  }
}

// ==========================================================================
// 9. BOOKING MODAL & SUBMISSION WIZARD
// ==========================================================================
window.selectCarForBooking = function(carId) {
  openBookingModalWithData({ carId });
};

function openBookingModalWithData(params = {}) {
  const modal = document.getElementById('bookingModal');
  const carSelect = document.getElementById('bookingCarSelect');
  const pickupDate = document.getElementById('bookingPickupDate');
  const returnDate = document.getElementById('bookingReturnDate');
  const insuranceCheck = document.getElementById('bookingInsuranceCheck');
  const gpsCheck = document.getElementById('bookingGpsCheck');
  const childSeatCheck = document.getElementById('bookingChildSeatCheck');

  if (!modal || !carSelect) return;

  // Populate car select dropdown
  carSelect.innerHTML = CARS_DATA.map(
    (c) => `<option value="${c.id}" ${c.id === params.carId ? 'selected' : ''}>${c.name} — $${c.pricePerDay}/day</option>`
  ).join('');

  if (params.pickupDate && pickupDate) pickupDate.value = params.pickupDate;
  if (params.returnDate && returnDate) returnDate.value = params.returnDate;
  if (insuranceCheck) insuranceCheck.checked = !!params.insurance;
  if (gpsCheck) gpsCheck.checked = !!params.gps;
  if (childSeatCheck) childSeatCheck.checked = !!params.childSeat;

  // Switch back to booking form view if previously confirmed
  const formView = document.getElementById('bookingFormView');
  const confirmedView = document.getElementById('bookingConfirmedView');
  if (formView) formView.style.display = 'block';
  if (confirmedView) confirmedView.style.display = 'none';

  openModal('bookingModal');
}

function initModals() {
  // Attach backdrop click listeners
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  modalOverlays.forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalOverlays.forEach((m) => {
        if (m.classList.contains('active')) {
          closeModal(m.id);
        }
      });
    }
  });

  // Booking Form Submission Handler
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('bookingDriverName');
      const emailInput = document.getElementById('bookingDriverEmail');
      const phoneInput = document.getElementById('bookingDriverPhone');
      const licenseInput = document.getElementById('bookingDriverLicense');
      const pickupDateInput = document.getElementById('bookingPickupDate');
      const returnDateInput = document.getElementById('bookingReturnDate');
      const carSelect = document.getElementById('bookingCarSelect');
      const pickupLoc = document.getElementById('bookingPickupLoc');

      // Validation
      if (!nameInput.value.trim() || !emailInput.value.trim() || !licenseInput.value.trim()) {
        showToast('Please fill in all required driver details.', 'error');
        return;
      }

      const car = CARS_DATA.find((c) => c.id === carSelect.value) || CARS_DATA[0];
      const start = new Date(pickupDateInput.value);
      const end = new Date(returnDateInput.value);
      let days = 1;
      if (!isNaN(start.getTime()) && !isNaN(end.getTime()) && end >= start) {
        const diffTime = Math.abs(end - start);
        days = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
      }

      const totalCost = car.pricePerDay * days;
      const bookingId = 'CG-' + Math.floor(100000 + Math.random() * 900000);

      // Render confirmation voucher view
      const formView = document.getElementById('bookingFormView');
      const confirmedView = document.getElementById('bookingConfirmedView');

      if (formView && confirmedView) {
        formView.style.display = 'none';
        confirmedView.style.display = 'block';

        confirmedView.innerHTML = `
          <div class="booking-confirmed-card">
            <div class="confirmed-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            
            <h3 style="font-size: 1.6rem; font-weight: 800; color: var(--text-main);">Reservation Confirmed!</h3>
            <p style="font-size: 0.9375rem; color: var(--text-secondary); margin-top: 4px;">
              Your car has been reserved. A confirmation email has been sent to <strong>${emailInput.value}</strong>.
            </p>

            <div class="voucher-details-box">
              <div class="voucher-item">
                <span>Confirmation ID</span>
                <strong style="color: var(--primary); font-family: monospace;">${bookingId}</strong>
              </div>
              <div class="voucher-item">
                <span>Selected Vehicle</span>
                <strong>${car.name}</strong>
              </div>
              <div class="voucher-item">
                <span>Pick-up Location</span>
                <strong>${pickupLoc ? pickupLoc.value : 'Airport Terminal'}</strong>
              </div>
              <div class="voucher-item">
                <span>Rental Duration</span>
                <strong>${days} ${days === 1 ? 'Day' : 'Days'}</strong>
              </div>
              <div class="voucher-item">
                <span>Authorized Driver</span>
                <strong>${nameInput.value}</strong>
              </div>
              <div class="voucher-item">
                <span>Est. Total Due</span>
                <strong style="color: var(--accent-emerald); font-size: 1.15rem;">$${totalCost}</strong>
              </div>
            </div>

            <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
              <button type="button" class="btn btn-secondary btn-sm" onclick="window.print()">Print Receipt</button>
              <button type="button" class="btn btn-primary btn-sm" onclick="closeModal('bookingModal')">Done</button>
            </div>
          </div>
        `;

        showToast(`Booking ${bookingId} confirmed! Enjoy your journey.`, 'success');
      }
    });
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
};

// ==========================================================================
// 10. ANIMATED STATISTICS COUNTER (ABOUT SECTION)
// ==========================================================================
function initStatisticsCounter() {
  const statNumbers = document.querySelectorAll('.counter-number');
  if (statNumbers.length === 0) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach((counter) => {
          animateValue(counter);
        });
      }
    });
  }, { threshold: 0.3 });

  const aboutSection = document.getElementById('about');
  if (aboutSection) observer.observe(aboutSection);
}

function animateValue(obj) {
  const target = parseInt(obj.getAttribute('data-target'), 10);
  const suffix = obj.getAttribute('data-suffix') || '';
  const duration = 1800;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out quartic
    const easeOut = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(start + (target - start) * easeOut);
    obj.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      obj.textContent = target.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(update);
}

// ==========================================================================
// 11. TESTIMONIALS SLIDER / CAROUSEL
// ==========================================================================
function initTestimonialsSlider() {
  const track = document.getElementById('reviewsTrack');
  const slides = document.querySelectorAll('.review-slide');
  const prevBtn = document.getElementById('prevReviewBtn');
  const nextBtn = document.getElementById('nextReviewBtn');
  const dotsContainer = document.getElementById('sliderDots');

  if (!track || slides.length === 0) return;

  let currentSlide = 0;
  let autoplayTimer = null;

  // Render dots
  if (dotsContainer) {
    dotsContainer.innerHTML = Array.from(slides).map((_, i) => `
      <span class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
    `).join('');

    dotsContainer.querySelectorAll('.slider-dot').forEach((dot) => {
      dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.getAttribute('data-index'), 10));
        resetAutoplay();
      });
    });
  }

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentSlide = index;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentSlide + 1);
      resetAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentSlide - 1);
      resetAutoplay();
    });
  }

  // Autoplay function
  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5500);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  track.parentElement.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  track.parentElement.addEventListener('mouseleave', () => startAutoplay());

  startAutoplay();
}

// ==========================================================================
// 12. FAQ ACCORDION
// ==========================================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other open accordions
      faqItems.forEach((other) => {
        if (other !== item) other.classList.remove('active');
      });

      // Toggle clicked item
      item.classList.toggle('active', !isActive);
    });
  });
}

// ==========================================================================
// 13. CONTACT FORM VALIDATION
// ==========================================================================
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const phoneInput = document.getElementById('contactPhone');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showFieldError(nameInput, 'Full Name is required.');
      isValid = false;
    } else {
      clearFieldError(nameInput);
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showFieldError(emailInput, 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearFieldError(emailInput);
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showFieldError(messageInput, 'Message must be at least 10 characters.');
      isValid = false;
    } else {
      clearFieldError(messageInput);
    }

    if (isValid) {
      showToast('Thank you! Your message has been received. Our team will contact you shortly.', 'success');
      contactForm.reset();
    }
  });

  function showFieldError(inputEl, msg) {
    const parent = inputEl.closest('.form-group');
    if (!parent) return;
    parent.classList.add('has-error');
    let errorEl = parent.querySelector('.field-error');
    if (errorEl) errorEl.textContent = msg;
  }

  function clearFieldError(inputEl) {
    const parent = inputEl.closest('.form-group');
    if (!parent) return;
    parent.classList.remove('has-error');
  }
}

// ==========================================================================
// 14. NEWSLETTER SUBSCRIPTION
// ==========================================================================
function initNewsletterForm() {
  const newsletterForm = document.getElementById('newsletterForm');
  if (!newsletterForm) return;

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (!emailInput || !emailInput.value.trim()) return;

    showToast(`Subscribed! Exclusive rental discounts will be sent to ${emailInput.value}.`, 'success');
    newsletterForm.reset();
  });
}

// ==========================================================================
// 15. TOAST NOTIFICATION ENGINE
// ==========================================================================
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const iconSvg = type === 'success' 
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : type === 'error'
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  toast.innerHTML = `
    ${iconSvg}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(30px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ==========================================================================
// 16. BACK TO TOP BUTTON
// ==========================================================================
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==========================================================================
// 17. DATE INITIALIZERS (HELPER)
// ==========================================================================
function setupDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const future = new Date(today);
  future.setDate(future.getDate() + 4);

  const formatDate = (d) => d.toISOString().split('T')[0];

  const tomorrowStr = formatDate(tomorrow);
  const futureStr = formatDate(future);

  // Set min dates & values on date inputs
  ['searchPickupDate', 'calcPickupDate', 'bookingPickupDate'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.min = tomorrowStr;
      if (!el.value) el.value = tomorrowStr;
    }
  });

  ['searchReturnDate', 'calcReturnDate', 'bookingReturnDate'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.min = tomorrowStr;
      if (!el.value) el.value = futureStr;
    }
  });
}

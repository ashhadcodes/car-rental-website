# 🚗 CarGo — Modern Car Rental Platform

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> A modern, responsive car rental web platform built with **pure semantic HTML5, modern CSS3, and vanilla JavaScript**. Engineered specifically as a production-quality frontend portfolio project with zero external frameworks or dependencies.

---

## 📌 Project Overview

**CarGo** is a full-featured on-demand car rental website that simulates a real-world vehicle booking service. The platform is designed with a sleek, contemporary automotive aesthetic, featuring dark/light mode toggling, real-time vehicle filtering and keyword search, an interactive rental price calculator, a dynamic car detail modal, and an end-to-end booking reservation wizard with instant confirmation receipts.

This project operates standalone: simply opening `index.html` in any modern web browser delivers the complete experience.

---

## 🌟 Key Features

### 1. 🔍 Interactive Search & Booking Engine
* **Location Pickers**: Choose between Airport Terminals, Downtown Metro Centers, Financial Districts, and Beachfront Marina hubs.
* **One-Way Rentals**: Support for different pick-up and drop-off stations.
* **Date & Schedule Validation**: Ensures valid rental periods with automatic date range verification and user feedback.

### 2. 🏎️ Fleet Catalog & Functional Filtering
* **10 Curated Realistic Vehicles**:
  * **Economy**: Toyota Corolla ($49/day)
  * **Sedan**: Honda Civic ($59/day)
  * **SUV**: Toyota Fortuner ($95/day), Hyundai Tucson ($75/day)
  * **Luxury**: BMW 5 Series ($135/day), Mercedes-Benz C-Class ($125/day)
  * **Sports**: Porsche 911 Carrera ($289/day), Ford Mustang GT ($149/day)
  * **Electric**: Tesla Model 3 ($89/day), Audi RS e-tron GT ($240/day)
* **Real-Time Category Filtering**: Switch seamlessly between All, Economy, Sedan, SUV, Luxury, Sports, and Electric.
* **Keyword Search**: Instant live search by vehicle make, model name, or category.
* **Rich Spec Cards**: Displays seating capacity, transmission type, powertrain, customer ratings, and daily rates.

### 3. 📄 Interactive Car Details Modal
* Large vehicle photography with high-resolution view.
* Performance and technical specifications breakdown (Seats, Transmission, Powertrain, MPG / Range).
* Standard features & inclusions checklist (Apple CarPlay, Driver Assist, Bluetooth, Heated Seats, etc.).
* Accessible modal management: closes via close button, clicking the backdrop overlay, or pressing the `Escape` key.
* Direct **"Book This Car"** action that carries selected vehicle data directly into the booking modal.

### 4. 🧮 Dynamic Rental Price Calculator
* Interactive cost estimator with live receipt breakdown.
* Dynamic calculation: `(Daily Rate × Number of Days) + Add-ons + Taxes = Estimated Total`.
* Optional travel add-ons with real-time recalculation:
  * Comprehensive Zero-Deductible Insurance (+$20/day)
  * Garmin Satellite GPS (+$8/day)
  * ISOFIX Child Safety Seat (+$10/day)
* Automatic date validation preventing negative or invalid day counts.
* **"Proceed to Booking"** button transferring calculated configurations into the reservation wizard.

### 5. 🛡️ Comprehensive Services ("Why Choose CarGo?")
* Easy Online Booking (instant confirmation)
* 24/7 Roadside Concierge Support
* Flexible Multi-Hub Drop-Offs
* 50-Point Sanitized Fleet Inspection Guarantee
* Transparent Upfront Pricing
* Zero-Deductible Protection Plans

### 6. 🗺️ 4-Step "How It Works" Workflow
1. **Choose Your Car**
2. **Select Your Dates**
3. **Confirm Your Booking**
4. **Enjoy Your Ride**

### 7. 🏢 Company Story & Animated Statistics
* Brand mission narrative and company heritage.
* Viewport-triggered animated numerical counters using `IntersectionObserver`:
  * **500+** Fleet Vehicles
  * **10,000+** Happy Drivers
  * **25+** Stations Nationwide
  * **99%** Customer Satisfaction

### 8. 💬 Customer Reviews Slider / Carousel
* Testimonials from verified drivers across multiple cities.
* Interactive slider with previous/next navigation buttons, dot indicators, and automatic rotation with hover-pause functionality.

### 9. ❓ Interactive FAQ Accordion
* Expandable accordion answering common questions regarding rental policies, insurance tiers, minimum age requirements, and cancellation terms.
* Smooth height animations and active state styling.

### 10. 📬 Contact & Validation System
* Validated contact form with custom inline error indicators.
* Direct business contact details (Phone, Email, Headquarters address, 24/7 Hours).
* Custom floating toast notifications for user actions.

### 11. 🌓 Dark & Light Mode Support
* High-contrast dark mode (default) and clean modern light mode.
* Theme preference automatically saved and persisted via `localStorage`.

---

## 📸 Screenshots

| Desktop View (Dark Mode) | Mobile View |
| :---: | :---: |
| *(Add your desktop screenshot here)* | *(Add your mobile screenshot here)* |

| Fleet Filter & Search | Rental Calculator |
| :---: | :---: |
| *(Add your fleet filter screenshot here)* | *(Add your calculator screenshot here)* |

---

## ⚙️ JavaScript Architecture

The application is powered by modular, well-structured vanilla JavaScript in `js/script.js`:

| Module / Function | Description |
| :--- | :--- |
| `initTheme()` | Manages dark/light mode toggle with `localStorage` persistence |
| `initNavigation()` | Controls sticky header, scrollspy active link indicator, and mobile menu |
| `initCarFleet()` | Renders vehicle cards, handles category pills and real-time keyword search |
| `openCarDetailsModal()` | Dynamically populates and displays vehicle modal with full specs |
| `initRentalCalculator()` | Computes day differentials, add-on sums, taxes, and updates DOM receipt |
| `initBookingSearch()` | Validates hero form inputs and redirects user to matching fleet results |
| `initModals()` | Handles accessible modal overlay clicks, `Escape` key capture, and booking generation |
| `initStatisticsCounter()` | Uses `IntersectionObserver` to trigger smooth eased numerical counters |
| `initTestimonialsSlider()` | Carousel controller supporting next/prev controls, dot sync, and autoplay |
| `initFaqAccordion()` | Smooth accordion toggle for help and policy questions |
| `initContactForm()` | Regex-based email and required field validator with feedback |
| `showToast()` | Floating notification dispatcher with auto-dismiss animations |

---

## 📂 Project Directory Structure

```text
car-rental-website/
├── index.html          # Semantic HTML5 document containing all sections and modals
├── css/
│   └── style.css       # Complete modern CSS3 stylesheet with custom properties
├── js/
│   └── script.js       # Pure Vanilla JavaScript application logic
├── assets/
│   ├── images/         # Local vehicle assets & graphics
│   └── icons/          # Vector SVG icons and brand assets
└── README.md           # Repository documentation
```

---

## 🚀 How to Run

No installations, Node modules, build tools, or web servers are required.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/car-rental-website.git
   ```
2. **Navigate into the project folder:**
   ```bash
   cd car-rental-website
   ```
3. **Open the site:**
   * Double-click `index.html` to open directly in Chrome, Firefox, Safari, or Edge.
   * Or use any local static server (e.g., Live Server in VS Code).

---

## 🔮 Future Improvements

- [ ] Integration with Leaflet / Mapbox for interactive station maps.
- [ ] Multi-currency switcher with live exchange rates.
- [ ] User authentication and saved favorites wishlist.
- [ ] Real-time vehicle telematics / fuel gauge simulator.

---

## 👨‍💻 Author

**CarGo Mobility Portfolio Project**
* Created by: [Your Name](https://github.com/your-username)
* Portfolio: [your-portfolio.com](https://your-portfolio.com)
* LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

const cars = [
  {
    brand: "Ferrari",
    model: "488 GTB",
    description: "V8 turbocharged, 661 hp",
    image: "image/R (1).jpeg",
    contact: "ferrari@sales.com"
  },
  {
    brand: "Lamborghini",
    model: "Huracán EVO",
    description: "V10, 640 hp",
    image: "image/Lamborghini-Huracan-EVO-3.jpg",
    contact: "lambo@sales.com"
  },
  {
    brand: "Bugatti",
    model: "Chiron",
    description: "W16, 1500 hp",
    image: "image/OIP.webp",
    contact: "bugatti@sales.com"
  },
    {
    brand: "Toyota",
    model: "supra",
    description: "I6 turbo, 382 hp",
    image: "image/2023_Toyota_Supra_(2).jpg",
    color: "Red",
    contact: "supra@sales.com"
  },
  //   {
  //   brand: "Toyota",
  //   model: "carrev",
  //   description: "W16, 1500 hp",
  //   image: "toyota.jpg",
  //   contact: "toyota@sales.com"
  // }
];

// Auto-sliding carousel
let currentSlide = 0;
function showSlide() {
  const slider = document.getElementById("slider");
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  currentSlide = (currentSlide + 1) % cars.length;
}
setInterval(showSlide, 3000);

// Populate carousel
document.getElementById("slider").innerHTML = cars.map(car => `
  <div class="slide">
    <img src="${car.image}" alt="${car.model}" />
    <h2>${car.model}</h2>
    <p>${car.description}</p>
  </div>
`).join("");

// Populate brand buttons
const brands = [...new Set(cars.map(car => car.brand))];
document.getElementById("brandButtons").innerHTML = brands.map(brand => `
  <button onclick="filterByBrand('${brand}')">${brand}</button>
`).join("");

// Populate car list
function renderCars(list) {
  document.getElementById("carList").innerHTML = list.map(car => `
    <div class="car-card">
      <img src="${car.image}" alt="${car.model}" />
      <h3>${car.model}</h3>
      <p>${car.description}</p>
      <p>Contact: ${car.contact}</p>
    </div>
  `).join("");
}
renderCars(cars);

// Search functionality
document.getElementById("searchBox").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  const filtered = cars.filter(car =>
    car.model.toLowerCase().includes(query) ||
    car.brand.toLowerCase().includes(query)
  );
  renderCars(filtered);
});

// Brand filter
function filterByBrand(brand) {
  const filtered = cars.filter(car => car.brand === brand);
  renderCars(filtered);
}

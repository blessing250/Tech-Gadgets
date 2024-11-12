// Sample products for each category
const products = {
  phones: [
    { name: "i phone 13", price: "$999", img: "i phone 13.jpeg" },
    {
      name: "Google pixel 6 pro",
      price: "$799",
      img: "Google pixel 6 pro.jpeg",},
    { name: "Galaxt S24 Ultra", price: "$1100", img: "Galaxy S24 Ultra.jpeg" },
  ],
  laptops: [
    { name: "Hp", price: "$1299", img: "hp.jpeg" },
    { name: "Dell", price: "$999", img: "Dell.jpeg" },
    { name: "Toshiba core i7", price: "$1100", img: "Toshiba core i7.jpeg" },
  ],
  wearables: [
    { name: "fitness Tracker", price: "$140", img: "fitness Tracker.jpeg" },
    {
      name: "Funost 0A88 Smart Watch",
      price: "$199",
      img: "Funost 0A88 Smart Watch.jpeg",
    },
    { name: "Smart Glasses", price: "150", img: "Smart Glasses.jpeg" },
  ],
  accessories: [
    { name: "Wireless Earbuds", price: "$99", img: "Beats Solo Buds.jpeg" },
    { name: "Portable Charger", price: "$49", img: "Portable Charger.jpeg" },
    {
      name: "Mini Portable charger",
      price: "$49",
      img: "Mini Portable Charger.jpeg",
    },
  ],
};

// Function to render products
function displayProducts(category) {
  const grid = document.getElementById(`${category}-grid`);
  products[category].forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
        `;
    grid.appendChild(card);
  });
}

// Initialize products for each category
["phones", "laptops", "wearables", "accessories"].forEach((category) => {
  displayProducts(category);
});

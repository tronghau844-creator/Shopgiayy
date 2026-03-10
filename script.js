function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({name, price, image});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " đã thêm vào giỏ!");
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartDiv = document.getElementById("cart");
  let total = 0;
  if (!cartDiv) return;
  cartDiv.innerHTML = "";
  cart.forEach((item, index) => {
    const imagePath = item.image || "";
    cartDiv.innerHTML += `<div class="cart-item">
      <img class="cart-thumb" src="${imagePath}" alt="${item.name}" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27240%27 height=%27160%27><rect width=%27100%25%27 height=%27100%25%27 fill=%27%23e9ecef%27/><text x=%2750%25%27 y=%2750%25%27 dominant-baseline=%27middle%27 text-anchor=%27middle%27 fill=%27%236c757d%27 font-size=%2718%27 font-family=%27Arial%27>Image not found</text></svg>'">
      <div class="cart-info">
        <p>${item.name}</p>
        <p>${item.price} VND</p>
        <button onclick="removeItem(${index})">Xóa</button>
      </div>
    </div>`;
    total += item.price;
  });
  document.getElementById("total").innerText = "Tổng tiền: " + total + " VND";
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function checkout() {
  alert("Thanh toán thành công!");
  localStorage.removeItem("cart");
  displayCart();
}

function initFadeIn() {
  const fadeItems = document.querySelectorAll(".fade-in");
  if (!fadeItems.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeItems.forEach((item) => observer.observe(item));
    return;
  }

  fadeItems.forEach((item) => item.classList.add("visible"));
}

window.addEventListener("load", () => {
  displayCart();
  initFadeIn();
});
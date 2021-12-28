//  Получить данные из базы данных засчёт AJAX запроса
let container = document.querySelector(".products");
async function deleteProduct(el) {
    let id = el.getAttribute("data-key");
    let res = await fetch(`/api/del/${id}`);
    let msg = await response.json();
    if (msg) {
        el.remove();
    };
};

// Products page
(async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    // container.innerHTML = JSON.stringify(data.data);
    // Вывод карточек с продуктами
    if (document.querySelector(".products") != null) {
        data.data.forEach((obj) => {
            container.innerHTML += `<div class = "products__item" data-key = "${obj.brand}"><img src="${obj.path}" alt="pr_photo" style="height:30vh">${obj.brand} ${obj.model}<br><div class="products__link"><a href="" class = "products__button">${obj.price}</a><br><a href="http://localhost:5453/${obj.brand}/${obj.model}" class="details">Details</a></div>`;
        });
    };
})();

// Spyderco
(async () => {
    const res = await fetch("/api/spyderco");
    const data = await res.json();
    if (document.querySelector(".products") != null) {
        data.data.forEach((obj) => {
            container.innerHTML += `<div class = "products__item" data-key = "${obj.brand}"><img src="${obj.path}" alt="pr_photo" style="height:30vh">${obj.brand} ${obj.model}<br><div class="products__link"><a href="" class = "products__button">${obj.price}</a><br><a href="http://localhost:5453/${obj.brand}/${obj.model}" class="details">Details</a></div>`;
        });
    };
})();

// Benchmade
(async () => {
    const res = await fetch("/api/benchmade");
    const data = await res.json();
    if (document.querySelector(".products") != null) {
        data.data.forEach((obj) => {
            container.innerHTML += `<div class = "products__item" data-key = "${obj.brand}"><img src="${obj.path}" alt="pr_photo" style="height:30vh">${obj.brand} ${obj.model}<br><div class="products__link"><a href="" class = "products__button">${obj.price}</a><br><a href="http://localhost:5453/${obj.brand}/${obj.model}" class="details">Details</a></div>`;
        });
    };
})();

// Microtech
(async () => {
    const res = await fetch("/api/microtech");
    const data = await res.json();
    if (document.querySelector(".products") != null) {
        data.data.forEach((obj) => {
            container.innerHTML += `<div class = "products__item" data-key = "${obj.brand}"><img src="${obj.path}" alt="pr_photo" style="height:30vh">${obj.brand} ${obj.model}<br><div class="products__link"><a href="" class = "products__button">${obj.price}</a><br><a href="http://localhost:5453/${obj.brand}/${obj.model}" class="details">Details</a></div>`;
        });
    };
})();

// Zero Tolerance
(async () => {
    const res = await fetch("/api/zero_tolerance");
    const data = await res.json();
    if (document.querySelector(".products") != null) {
        data.data.forEach((obj) => {
            container.innerHTML += `<div class = "products__item" data-key = "${obj.brand}"><img src="${obj.path}" alt="pr_photo" style="height:30vh">${obj.brand} ${obj.model}<br><div class="products__link"><a href="" class = "products__button">${obj.price}</a><br><a href="http://localhost:5453/${obj.brand}/${obj.model}" class="details">Details</a></div>`;
        });
    };
})();

// Admin page
let table = document.querySelector(".allproducts"); //- table
(async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    if (document.querySelector(".allproducts") != null) {
        table.innerHTML = `<tr><th>Brand</th><th>Model</th><th>Steel</th><th>Hardness</th><th>Blade shape</th><th>Price</th><th>Update/Delete</th></tr>`;
        data.data.forEach((obj) => {
            table.innerHTML += `<tr><td>${obj.brand}</td><td>${obj.model}</td><td>${obj.steel}</td><td>${obj.hardness}</td><td>${obj.blade_shape}</td><td>${obj.price}</td><td><div id="btn"><div class="btn" id="del_btn" onclick="del_el()">Delete</div><br><div class="btn" id="upd_btn" onclick="upd_el()">Update</div></div></td></tr>`
        });
    };
})();
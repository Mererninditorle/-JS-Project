//  Получить данные из базы данных засчёт AJAX запроса
let container = document.querySelector(".products");
// Immediate Implemecation Functioanl E
async function deleteProduct(el) {
    let id = el.getAttribute("data-key");
    let res = await fetch(`/api/del/${id}`);
    let msg = await response.json();
    if (msg) {
        el.remove();
    };
};


(async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    // container.innerHTML = JSON.stringify(data.data);
    // Вывод карточек с продуктами
    data.data.forEach((obj) => {
        container.innerHTML += `<div class = "products__item" data-key = "${obj.brand}"><img src="${obj.path}" alt="" style="height:30vh">${obj.brand} ${obj.model}<br><div class="products__link"><a href="" class = "products__button">${obj.price}</a><br><a href="http://localhost:5453/${obj.brand}/${obj.model}" class="details">Details</a></div>`;
    });
})();
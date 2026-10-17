const container = document.getElementById("container");
const cart = document.getElementById("cart");
let productList = [];
let cartList = [];

fetch("https://fakestoreapi.com/products")
.then((response => response.json()))
.then(data => {
    productList = data;
    for(const i of productList) {addProduct(container, i, "addToCart", "Add to cart")};
});

const addProduct = (parent, x, cal, txt) => {
    parent.innerHTML += `
    <div class="product" id="product${x.id}">
        <img src="${x.image}">
        <h3>${x.title}</h3>
        <p>price: ${x.price}</p>
        <p>category: ${x.category}</p>
        <p>rating: ${x.rating.rate}</p>
        <button onclick="${cal}(event)">${txt}</button>
    </div>`;
};

const addToCart = e => {
    let product = productList.find(x => e.target.parentElement.id === `product${x.id}`);
    if(cartList.includes(product) === false) {
        cartList.push(product);
        addProduct(cart, product, "removeFromCart", "Remove from cart");
    }
};

const removeFromCart = e => {
    let product = cartList.findIndex(x => e.target.parentElement.id === `product${x.id}`);
    cartList.splice(product, 1);
    cart.innerHTML = "";
    cartList.forEach(x => addProduct(cart, x, "removeFromCart", "Remove from cart"));
};
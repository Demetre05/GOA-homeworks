fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        for(const i of data) {
            console.log(i.id, i.title);
            console.log(i.price);
        }
    }).catch(err => console.log(err));
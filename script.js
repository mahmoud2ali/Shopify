let url = "https://dummyjson.com/products"

const Data = async ()=> {
    let response = await fetch(url);
    let data = await response.json();
    let products = data.products;
    return products;
}

showProducts =async()=>{
    products= await Data();
    let productList = document.getElementById("product-list");
    products.forEach(product => {
        let proDiv = document.createElement('div');
        proDiv.className ='card';
        let finalPrice = product.price - (product.price * product.discountPercentage / 100).toFixed()
        proDiv.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p class='oldPirce'>price: $${product.price}</p>
            <p class='price'>${finalPrice}</p>
            <p class='description'>${product.description}</p>
        `;
        productList.appendChild(proDiv);
    });
}

window.onload = showProducts()


console.log(Data())

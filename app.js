imageList = []
for (i = 1; i < 13; i++) {
    imageList.push("https://github.com/huydo2424/b5/blob/main/mu" + i.toString() + ".png?raw=true")
}
let products = [
    {
        id: 1,
        name: "Adidas Deck",
        price: 500000,
        image: imageList[0]
    },
    {
        id: 2,
        name: "Adidas Arena",
        price: 500000,
        image: imageList[1]
    },
    {
        id: 3,
        name: "Adidas Spring",
        price: 500000,
        image: imageList[2]
    },
    {
        id: 4,
        name: "Adidas Sport",
        price: 500000,
        image: imageList[3]
    },
    {
        id: 5,
        name: "Adidas Aut",
        price: 500000,
        image: imageList[4]
    },
    {
        id: 6,
        name: "Adidas Black",
        price: 500000,
        image: imageList[5]
    },
    {
        id: 7,
        name: "Adidas Long",
        price: 500000,
        image: imageList[6]
    },
    {
        id: 8,
        name: "Adidas Gang",
        price: 500000,
        image: imageList[7]
    },
    {
        id: 9,
        name: "Adidas 9",
        price: 500000,
        image: imageList[8]
    },
    {
        id: 10,
        name: "Adidas 10",
        price: 500000,
        image: imageList[9]
    },
    {
        id: 11,
        name: "Adidas 11",
        price: 500000,
        image: imageList[10]
    },
    {
        id: 12,
        name: "Adidas 12",
        price: 500000,
        image: imageList[11]
    }
]
for (let product of products) {
    let card = `
        <div class="card">
            <div class="image-container">
                <img src="${product.image}" /> 
            </div> 
            <div class="container">
                <div class="product-name">
                <h5>${product.name}</h5> 
                <h6>${product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h6>
                </div>
                <button onclick="checkForCart(${product.id})">Add to cart</button> 
            </div>
        </div>
    `
    document.getElementById("products").innerHTML+= card
}

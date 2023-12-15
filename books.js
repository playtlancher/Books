let books = [{
    name: "Arrays",
    price: 10
},
    {
        name: "1984",
        price: 13
    },
    {
        name: "Animals farm",
        price: 12
    }]
for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books.length; j++) {
        if (books[i].price > books[j].price) {
            let t = books[i].price;
            books[i].price = books[j].price;
            books[j].price = t;
        }
    }
}
let sum = 0;
for (let i = 0; i<books.length; i++){
    sum += books[i].price;
    if(books[i].name[0]==="a" || books[i].name[0]==="A")
        console.log(books[i].name)
}
console.log(sum);
console.log(books);
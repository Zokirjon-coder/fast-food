let foods = [
    {
        id: 1,
        img: 'image',
        name: 'foodName.current.value',
        kategory: 'foodKategory.current.value',
        price: 'foodPrice.current.value',
        inf: 'foodInfo.current.value',
    }
]

foods = [foods, ...{
    id: 2,
    img: 'image',
    name: 'foodName.current.value',
    kategory: 'foodKategory.current.value',
    price: 'foodPrice.current.value',
    inf: 'foodInfo.current.value',
}]
console.log(foods)
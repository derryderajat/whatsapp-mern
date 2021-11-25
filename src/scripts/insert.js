// Insert docs customers

db.customers.insertOne({
    _id: "khannedy",
    name: "Eko Kurniawan Khannedy"
})

// insert documents products
debugger.products.insertMany([
    {
        _id: 1,
        name: "Indomie Ayam Bawang",
        price: new NumberLong(2000)
    },
    {
        _id: 2,
        name: "Mie Sedap",
        price: new NumberLong(2000)
    }
])
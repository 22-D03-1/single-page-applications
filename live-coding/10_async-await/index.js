const inventory = {
    laptop: {
        count: 32,
        price: 399
    },
    speaker: {
        count: 65,
        price: 34.99
    },
    monitor: {
        count: 12,
        price: 52.95
    }
}

function checkInventory(product) {
    return new Promise((resolve, reject) => {
        if(inventory[product].count > 0) {
            resolve("Produkt vorhanden")
        } else {
            reject("Produkt ausverkauft")
        }
    })
}

function processPayment(product, balance) {
    return new Promise((resolve, reject) => {
        if(balance >= inventory[product].price) {
            resolve("Bezahlung erfolgreich")
        } else {
            reject("Nicht genug Guthaben")
        }
    })
}

function shipOrder() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Produkt verschickt"), 2000)
    })
}

// Pyramid of Doom oder Callback Hell

/* function order(product, balance) {
    checkInventory(product)
        .then((productInventory)=> {
            console.log(productInventory)
            processPayment(product, balance)
                .then((productPayment) => {
                    console.log(productPayment)
                    shipOrder()
                        .then((productShipment) => {
                            console.log(productShipment)
                        })
                        .catch((rejected) => {
                            console.log(rejected)
                        })
                })
                .catch((rejected) => {
                    console.log(rejected)
                })
        })
        .catch((rejected) => {
            console.log(rejected)
        })
} */

function order(product, balance) {
    checkInventory
}

order("speaker", 62.5)
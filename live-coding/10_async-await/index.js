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


// Funktionen, die Asynchrones Verhalten imitieren
function checkInventory(product) {
    return new Promise((resolve, reject) => {
        if(inventory[product].count > 0) {
            setTimeout(() => resolve("Produkt vorhanden"), 1000)
        } else {
            setTimeout(() => reject("Produkt ausverkauft"), 1000)
        }
    })
}

function processPayment(product, balance) {
    return new Promise((resolve, reject) => {
        if(balance >= inventory[product].price) {
            setTimeout(() => resolve("Bezahlung erfolgreich"), 500)
        } else {
            setTimeout(() => reject("Nicht genug Guthaben"), 500)
        }
    })
}

function shipOrder() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Produkt verschickt"), 2000)
    })
}

/**
 * Da die Funktionen von einander abhängig sind müssen wir sie verketten. Was wir bekommen ist die:
 * Pyramid of Doom oder Callback Hell 
 * */ 

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

/**
 * Wir nutzen async ... await um die Ausführung zu pausieren. Erst wenn der Promise nicht mehr 
 * <pending> ist erfolgt die Zuweisung zu der Variable und wir gehen weiter im Code
 */

async function order(product, balance) {
    try {
        const productInventory = await checkInventory(product)
        console.log(productInventory)
        const productPayment = await processPayment(product, balance)
        console.log(productPayment)
        const productShipment = await shipOrder()
        console.log(productShipment)

    } catch (error) {
        console.log(error)
    }

}

order("speaker", 62.5)
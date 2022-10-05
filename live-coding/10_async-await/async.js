function isZero(number) {
    return new Promise((resolve, reject) => {
        if(number == 0) {
            setTimeout(() => {
                resolve("Yolo!!!")
            }, 1000)
        } else {
            reject("Not Zero")
        }
    })
}

/* isZero(0)
    .then((resolvedValue) => {
        console.log(resolvedValue)
    })
    .catch((rejectedValue) => {
        console.log(rejectedValue)
    }) */

async function handleNumbers () {
    const value = await isZero(0)
    console.log(value)
}
handleNumbers()

function playFootball() {
    return new Promise((resolve, reject) => {
        //Math.random() gibt eine Zahl zwischen 0 und 1 zurück. Bspw: 0.13456 oder 0.87321...
        const number= Math.random()
        if (number > 0.8) {
            resolve("Gewonnen")
        } else {
            reject("Verloren")
        }
    })
}

async function matchDay() {
    try {
        const outcome = await playFootball()
        console.log(outcome)
    } catch (error) {
        console.log(error)
    }
}
matchDay()

/** 
 * Wenn eine Funktion als async deklariert wird, gibt sie immer ein Promise zurück.
 * Wir haben dann Zugriff auf die then() und catch() Funktionen
 * */
async function isZeroAdvanced (number) {
    if(number == 0) {
         return "Is Zero"
    }
    else {
        return "Not Zero"
    }
}

/* isZeroAdvanced(0)
    .then(resolvedValue => {
        console.log(resolvedValue)
    }) */
const crypto = document.querySelector("#inputGroupCrypto")
const amount = document.querySelector("#inputAmount")
const currency = document.querySelector("#inputGroupCurrency")
const result = document.querySelector("#inputResult")

// Meine Funktion für den Event Listeber
const convert = async () => {

    //URL setzt sich zusammen aus Base, Wert meiner Crypto Auswahl, Wert meiner Währung Auswahl und /buy
    const url = `https://api.coinbase.com/v2/prices/${crypto.value}-${currency.value}/buy`
    try {
        //fetch gibt mir Promise zurück, deswegen await. Dann bekomme ich meine response
        const res = await fetch(url)
        if (res.status === 200) {
            //Um an Daten zu kommen nutze ich json()
            const { data } = await res.json()
            /** 
             * der Wert aus meinen Daten multipliziere ich mit dem Wert 
             * aus dem Amount Feld (oder 1 wenn leer) und speichere es in
             * dem result Feld
             *  */
            result.value = data.amount * (amount.value || 1 ) + " " + currency.value
        } else {
            throw new Error("Fetch fehlgeschlagen")
        }
    } catch (error) {
        console.log(error)
    }
}

document.querySelector("#convert-button").addEventListener("click", convert)
import { modulo, percentage, percentageOf,difference } from "./percentage.js"
import calculateRatio from "./aspect-ratio.js"

const moduloForm = document.querySelector("#modulo-form")
moduloForm.addEventListener("change", ()=> {
    const moduloResult = modulo(
        document.querySelector("#modulo_1").value, 
        document.querySelector("#modulo_2").value)
    
    document.querySelector("#modulo_result").value = moduloResult
})

const percentageForm = document.querySelector("#percentage-form")
percentageForm.addEventListener("change", ()=> {
    const percentageResult = percentage(
        document.querySelector("#percentage_1").value, 
        document.querySelector("#percentage_2").value)
    
    document.querySelector("#percentage_result").value = percentageResult
})

const percentageOfForm = document.querySelector("#percentageOf-form")
percentageOfForm.addEventListener("change", ()=> {
    const percentageOfResult = percentageOf(
        document.querySelector("#percentageOf_1").value, 
        document.querySelector("#percentageOf_2").value)
    
    document.querySelector("#percentageOf_result").value = percentageOfResult
})

const differenceForm = document.querySelector("#difference-form")
differenceForm.addEventListener("change", ()=> {
    const differenceResult = difference(
        document.querySelector("#difference_1").value, 
        document.querySelector("#difference_2").value)
    
    document.querySelector("#difference_result").value = differenceResult
})

const aspectForm = document.querySelector("#aspect-form");
const newWidth = document.querySelector("#ratio_result-width");
const newHeight = document.querySelector("#ratio_result-height");
aspectForm.addEventListener("change", (e) => {
    switch (e.target.id) {
        case "ratio_result-width":
            newHeight.value = calculateRatio(
                document.querySelector("#ratio_1").value, 
                document.querySelector("#ratio_2").value, 
                newWidth.value, 
                "w");
            break;
        case "ratio_result-height":
            newWidth.value = calculateRatio(
                document.querySelector("#ratio_1").value, 
                document.querySelector("#ratio_2").value, 
                newHeight.value, 
                "h");
            break;
    }
})
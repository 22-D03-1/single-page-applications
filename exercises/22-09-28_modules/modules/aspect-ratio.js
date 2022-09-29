function fixRoundingErrors(float) {
    return parseFloat(float.toFixed(2));
}

export default function (originalWidth, originalHeight, newValue, valueType) {
    if ((originalHeight <= 0) || (originalWidth <= 0) || (newValue <= 0)) {
        return 0;
    }
    let formula = (valueType === "h") ?
        originalWidth / originalHeight :
        originalHeight / originalWidth;
    return fixRoundingErrors(formula * newValue);
}
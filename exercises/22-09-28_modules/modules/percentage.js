export function modulo(first, second) {
    return first % second;
}

export function percentage(first, second) {
    return (first * second) / 100;
}

export function percentageOf(first, second) {
    return (first * 100) / second;
}

export function difference(first, second ) {
    let calc = second - first;
    return (calc * 100) / first 
}

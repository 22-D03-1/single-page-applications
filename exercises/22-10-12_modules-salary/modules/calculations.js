export default (array) => {
    const salaries = array.map(s => s.salary)

    return  Math.floor(salaries.reduce((a,b) => a + b, 0) / salaries.length)
}
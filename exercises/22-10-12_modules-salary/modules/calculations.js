export const averageSalary = (array, filter  = null, value = null) => {
    const salaryByRole = (filter && value) ? array.reduce((filtered, s) => {
        if(s[filter] == value) {
            filtered.push(s.salary)
        }
        return filtered
    }, []) : array.map(s => s.salary)

    return  Math.floor(salaryByRole.reduce((a,b) => a + b, 0) / salaryByRole.length)
}
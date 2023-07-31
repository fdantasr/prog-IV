function add(a: number | string, b: number | string) : number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b
    } else if (typeof a === "string" && typeof b === "string") {
       //return a.concat(b);
        return `${a}${b}` // usando template string 
    } else {
        return "Invalid parameters"
    }
}
console.log(add('10', '20'));
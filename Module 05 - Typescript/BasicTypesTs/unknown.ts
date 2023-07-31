let x: unknown;
x = 100;
x = "Luiz";
x = 900;
x = 10;
const y: number = 800;
// te força a fazer uma verificação antes de usar
if (typeof x === "number") console.log(x + y);
const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//For Each
a1.forEach((value, index, array) => {
    console.log(value, index, array);
}
);

//for in 
for (let i in a1) {
    console.log(a1[i]);
}

//for of

for (let value of a1) {
    console.log(value);
}



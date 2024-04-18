console.log("Printed 1 to 5 while loop");
let q = 1;
while (q <= 5) {
    console.log(q);
    q += 1;
}

console.log("Printed Table with while loop");
let x = 12;
let y = 1;
while (y <= 10) {
    console.log(x * y);
    ++y;
}

console.log("Printed reverse number with do while loop");
let p = 12;
do {
    console.log(p);
    p--;
} while (p >= 0);

console.log("Printed Table with do while loop");
let t = 39;
let u = 10;

let i = 1;
do {
    console.log(`${t} * ${i} = ${t * i}`);
    i++;
} while (i <= u);
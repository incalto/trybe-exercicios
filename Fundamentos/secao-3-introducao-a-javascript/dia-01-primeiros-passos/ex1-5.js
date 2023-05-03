let a = 10;
let b = 2;
let c = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b){
    console.log("A é o maior número");
}else {
    console.log("B é o maior número");
}

if (a > b && a > c){
    console.log("A é o maior número");
}else if (b > a && b >c) {
    console.log("B é o maior número");
}else {
    console.log("C é o maior número");
}

if (a > 0){
    console.log("A é positivo");
}else if (a < 0){
    console.log("A é negativo");
}else {
    console.log("A é zero");
}

let angulo1 = 10;
let angulo2 = 30;
let angulo3 = 140;

if (angulo1 + angulo2 + angulo3 == 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0){
    console.log(true);
}else {
    console.log(false);
}


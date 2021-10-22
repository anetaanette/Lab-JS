//  Napisz program, który policzy miejsca zerowe funkcji liniowej y = ax + b.
a = 10
b = 2
x = b / a

if (b == 0 && a == 0) {
    console.log("Jest nieskonczenie wiele miejsc zerowych");
} else if (a != 0) {
    console.log("Jest jedno miejsce zerowe -b/a");
} else {
    console.log("Nie ma miejsc zerowych");
}

// Napisz program, który policzy miejsca zerowe funkcji kwadratowej y = ax2 + bx + c
let c = 5

let delta = (b ** 2 - 4 * a * c)
if (a == 0) {
    console.log("zadanie 9");
}
if (delta == 0) {
    console.log("Jest jedno miejsce zerowe");
} else if (delta < 0) {
    console.log("Brak miejsc zerowych");
} else {
    console.log("")
}


// Napisz program, który dla danej zmiennej liczbowej wypisze cyfrę jedności, cyfrę dziesiątek oraz cyfrę setek.

let zmienna = 123;

let one = (zmienna / 1) % 10;
console.log(one);

let ten = (zmienna / 10 ) % 10;
console.log(Math.round(ten));

let hundred = (zmienna / 100) % 10;
console.log(Math.round(hundred));

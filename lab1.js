console.log('Hello World');

let napis = "ala ma kotA";
console.log(napis);

let x = 1;
if (x < 100) {
    console.log('pierwszy warunek\nzostał spełnioiny');
} else {
    console.log('drugi warunek\nzostał spełniony');
}

let y = 3;
if (x < 100) {
    console.log('został spełniony');
    if (y % 3 == 0) {
        console.log('pierwszy i drugi warunek');
    } else {
        console.log('tylko pierwszy warunek')
    }
} else {
    console.log('pierwszy warunek\nnie został spełniony');
}

if (x == y) {
    console.log("TAK");
} else {
    console.log("NIE");
}

if (x % 2 == 0) {
    console.log('Zmienna jest parzysta.');
} else {
    console.log('Zmienna jest nieparzysta.');
}

if (x > y) {
    console.log('x jest większe.');
} else {
    console.log('y jest większe.');
}

let a = 10;
let b = 12;
let c = 14;
let temporal_biggest = 0
if (a > b) {
temporal_biggest = a;
} else if (b > a) {
    temporal_biggest = b;
} 
if (temporal_biggest > c) {
    console.log(temporal_biggest);
} else {
    console.log(c);
}
console.log(Math.max(a,b,c)); 


let najmniejsza = "xyz";
let średnia = "xyz";

if (a < b && a < c) {
    najmniejsza = a;
} else if (b < a && b < c) {
    najmniejsza = b;
} else {
    najmniejsza = c;
}
// console.log(najmniejsza);

if (a = najmniejsza) {
    if (b < c) {
        średnia = b;
    } else {
        średnia = c;
    }
} else if (b = najmniejsze) {
    if (a < c) {
        średnia = a;
    } else {
        średnia = c;
    }
} else {
    if (c < a) {
        średnia = c;
    } else {
        średnia = a;
    }
}
// console.log(średnia);

console.log(najmniejsza + ' < ' + średnia + ' < ' + c);
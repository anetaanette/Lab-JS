// Zad. 1a
for (var i=1; i<=15; i++) {
    console.log(i);
}

// Zad. 1b
for (var i=2; i<=15; i+=4) {
    console.log(i);
}

// Zad. 2 
for (let i=5; i >=1; i--) {
    console.log(('*'.repeat(i)));
} 

// Zad. 1c 
let n = 4;
let strang = "";
console.log("rozmiar: " + n);

for (let i=0; i <= n; i++) {
    //printing spaces
    for (let j = 0; j < n-i; j++){
        strang += "-";
    }
    // printing pluses
    for (let k = 0; k < i; k++) {
        strang += "+";
    }
    strang += "\n";
}
console.log(strang);


// Zad. 3
let string = "";
for (let i=1; i <=5; i++) {
    for (let j = 0; j < 5-i; j++){
        string += " ";
    }
    for (let k = 0; k < i; k++) {
        string += "*";
    }
    string += "\n";
} 
console.log(string);

// Zad. 4
for (let i=1; i <=5; i++) {
    console.log(('*'.repeat(i)));
} 







'use strict';

const valores = [['20',''],
                ['0','ab'],
                ['0','cd'],
                ['0','gh'],
                ['4','ij'],
                ['0','ab'],
                ['0','cd'],
                ['0','ij'],
                ['4','that'],
                ['3','be'],
                ['0','to'],
                ['1','be'],
                ['5','question'],
                ['1','or'],
                ['2','not'],
                ['4','is'],
                ['2','to'],
                ['4','the']];

process.stdin.resume();
process.stdin.setEncoding('utf-8');
/*
1. crear un vecto en el cual se descargan todos 
    los valores del eje x de la matriz y ordenarlo -- ok

2.obtener el maximo valor yel minimo de se vector ordenado -- ok

3.crear un vctor que almacene la suma de la posiicion a 
    la posicion 2 y asi sucesivamente con las posiciones posteriores -- ok

4.crear un vecor que almacene la suma de la posicion 0 a la 
    sucesivamente 1 t asi sucesivamente con las pocisiones anteriores

5. crear un vector que lamacene el numero de coincidencias 
    aen cada una de las posiciones en el vector 

*/
let inputString = '';
let currentLine = 0;
let auxiliarVector = 0;
let maximo = 0;
let minimo = 0;
let recorrido;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countSort function below.
function countSort(arr) {
    const vector
    for (let i = 0; i < arr.length; i++){
        vector.push(parseInt(arr[i][0]));
    }
    vector = ordenarVector(vector);
    minimo = vector[0];
    maximo = vector[vector.length - 1];
    for (var i= minimo; i<= maximo; i++){
        recorrido.push(i);

    }
}

function ordenarVector(vector) {
    for (let j = 0; j < vector.length; j++){
        for (let i = 0; i < vector.length; i++){
            if (vector[i] >= vector[i + 1]) {
                auxiliarVector = vector[i];
                vector[i] = vector[i + 1];
                vector[i + 1] = aux;
                }
        }
    }
    return vector;
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    countSort(arr);
}

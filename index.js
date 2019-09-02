

'use strict';

            var valores = [
                [20,""],
                [0, "ab"],
                [6, "cd"],
                [0, "ef"],
                [6, "gh"],
                [4, "ij"],
                [0, "ab"],
                [6, "cd"],
                [0, "ef"],
                [6, "gh"],
                [0 ,"ij"],
                [4, ",that"],
                [3, "be"],
                [0, "to"],
                [1, "be"],
                [5, "question"],
                [1, "or"],
                [2, "not"],
                [4, "is"],
                [2, "to"],
                [4, "the"]
                ];

valores = valores.shift();
console.log(valores);

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});
//funcion para calcular un valor en un rango determinado 
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

function readLine() {
    return inputString[currentLine++];
}

// Complete the countSort function below.
function countSort(arr) {
    arr.shift();
    arr = arr;//reescribe el vector pero sin la posicion inicial
    let menor = 0;
    let mayor = 0;

    menor = retornarValor(arr, 1);
    mayor = retornarValor(arr, 0);
    var vectorRango = rangoVector(menor, mayor); 
    //ya tengo el vector con los valores desde el minimo hasta el maximo
}

function vectorCoincidencias(arr) {
    let vecCoin = [];

    
}

function rangoVector(a, b) {
    var vectorRango = [];
    for (let i = a; i <= b; i++) {
        vectorRango.push(i);

    }
    return vectorRango;

}



function retornarValor(arr = [], opcion = 0) {

    let base = arr[5][0];
    /*
    defini que el elemento ubicado en la posicion 5 0 era el mayor y el menor a la vez
    */
    let mayor = 0;
    let menor = 0;

    if (opcion == 0) {

        mayor = base
        
        for (let i = 0; i < arr.length; i++) {

            if (mayor < arr[i][0]) {

                mayor = arr[i][0];

            }
        }

        return mayor;
    }
    else if (opcion == 1) {

        menor = base;

        for (let i = 0; i < arr.length; i++) {

            if (menor > arr[i][0]) {
                menor = arr[i][0];
            }
        }
        return menor;
    }

    return 
    
}



function main() {
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    countSort(arr);
}

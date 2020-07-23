/* A continuación, se pondrán a prueba sus conocimientos en la utilización de ciclos y métodos en
JavaScript. Según corresponda el caso, debe hacer uso de ciclos for, for-in, for-of y métodos para
resolver cada ejercicio.
Debe crear una página HTML con el código JavaScript necesario para que le pregunte al usuario un
número entre el 1 al 6. Cada uno de estos números representará una opción que, al ser ingresada,
deberá ejecutar una función que corresponderá a un ejercicio que se le pide en la sección de
instrucciones. Es decir, la opción 1 representará el ejercicio 1 del apartado Instrucciones.
Recuerde que para solicitar datos al usuario puede hacerlo mediante la función integrada prompt().

Instrucciones

1. Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir por consola los números
desde el 0 hasta el número que ingresó el usuario.

2. Realizarle al usuario la pregunta “¿De qué color es el caballo blanco de Napoleón?”. Si el
usuario responde algo distinto a “blanco”, se le deberá volver a hacer la misma pregunta; de lo
contrario, se le dejará de hacer la pregunta.

3. En este ejercicio deberá calcular el promedio de notas del usuario. Para ésto, la página web le
debe solicitar el promedio de notas de los ramos de Matemáticas, Física y Ciencias. Luego,
debe indicarle por pantalla el promedio de notas (puede hacer uso de la función alert()). El
promedio de notas mostrado debe estar redondeado a un número entero.

4. Solicite al usuario escribir el nombre de 3 frutas. Cada fruta que se ingrese se debe ingresar de
manera individual. Cuando ya se hayan ingresado la totalidad de frutas, se deben imprimir todas
por consola, a excepción de la que tenga el nombre de “manzana”.

5. Solicite al usuario escribir su nombre. Luego, debe determinar la cantidad de vocales y
consonantes que tiene dicho nombre y mostrarlos por pantalla (utilice alert()).*/



let seleccion= prompt("Ingresar el numero de ejercicio");

// comparaciones del prompt usuario

if (seleccion === "1"){
    ejercicio1();
};

if (seleccion === "2"){
    ejercicio2();
};

if (seleccion === "3"){
    ejercicio3();
};

if (seleccion === "4"){
    ejercicio4();
};
if (seleccion === "5"){
    ejercicio5();
};

// desglose de ejercicios

function ejercicio1(){
    let usuario = prompt("introduce un numero entre 1 al 100");
    
    for (let contador= 0; contador <= usuario; contador++){
     console.log (contador);
    }
    
};
function ejercicio2(){
let input = prompt("¿De que color es el caballo blanco de Napoleón");
let color = "blanco";
(input.toLowerCase()  == color.toLowerCase()) ? alert("La respuesta es correcta") : ejercicio2();
};

function ejercicio3(){
    let ma= +prompt("Introducir el promedio de Matematica");
    let fi= +prompt("Introducir el promedio de Fisica");
    let cien= +prompt("Introducir el promedio de Ciencia");
    let resultado=(ma+fi+cien)/3;
    alert(Math.round(resultado));

};
function ejercicio4(){
    let num= [1,2,3];
    let frutas= [];

    num.forEach(function(){
        let fruta= prompt("Ingrese el nombre de una fruta");
        frutas.push(fruta);

    });
    frutas.forEach(function(el){
        if(el !== "manzana"){
            console.log(el);
        }
    })

};
function ejercicio5(){
    
     
let usuario= prompt("Por favor, ingrese su nombre");
let vocales= ["a","e","i","o","u"];

let nombre= usuario.split("");
let vocalesNum= 0;
let consonanteNum= 0;

nombre.forEach(function(letra){
    (vocales.includes(letra)) ? vocalesNum++ : consonanteNum++; 
    
});

console.log(vocalesNum);
console.log(consonanteNum);

};


















/*dai in input 10 interi, stampa il più grande ed il più piccolo

let numero1 = prompt(`inserisci un numero`);
console.log(numero1);
let numero2 = prompt(`inserisci un numero`);
console.log(numero2);
let numero3 = prompt(`inserisci un numero`);
console.log(numero3);
let numero4 = prompt(`inserisci un numero`);
console.log(numero4);
let numero5 = prompt(`inserisci un numero`);
console.log(numero5);
let numero6 = prompt(`inserisci un numero`);
console.log(numero6);
let numero7 = prompt(`inserisci un numero`);
console.log(numero7);
let numero8 = prompt(`inserisci un numero`);
console.log(numero8);
let numero9 = prompt(`inserisci un numero`);
console.log(numero9);
let numero10 = prompt(`inserisci un numero`);
console.log(numero10);
console.log(`il numero maggiore è ${numero}`);
console.log(`il numero minore è ${numero}`);

*/




/*genera un valore casuale tra 1 e 10 e chiedi all'utente un
 prompt finché non indovina il numero generato


const numeroRandom = Math.floor(Math.random() * 10);
console.log(numeroRandom);
let numeroUtente = ""
while (numeroRandom != numeroUtente) {
    numeroUtente = prompt("inserisci un numero finchè non indovini il numero generato")

}
console.log(`complimenti il numero inserito ${numeroUtente} è uguale al numero random ${numeroRandom}`);

*/





/*calcola quante monete ci sono in una macchinetta del caffè
 generando una quantità casuale di monete (da 1 a 100) per ogni tipo
 di moneta (1cent, 2cent, 5cent, 10cent...). quanto è contenuto nella macchinetta? */



const monete1cent = Math.floor(Math.random() * 100);
console.log(` da 1 sono ${monete1cent}`);
const monete2cent = Math.floor(Math.random() * 100);
console.log(`da 2 sono ${monete2cent}`);
const monete5cent = Math.floor(Math.random() * 100);
console.log(`da 5 sono ${monete5cent}`);
const monete100cent = Math.floor(Math.random() * 100);
console.log(`da 100 sono ${monete100cent}`);
const totaleMacchinetta = monete1cent + monete2cent + monete5cent + monete100cent;
console.log(`totale ${totaleMacchinetta}`);




/*
const monete1cent = Math.floor(Math.random() * 100) * 1;
console.log(` da 1 sono ${monete1cent}`);
const monete2cent = Math.floor(Math.random() * 100) * 2;
console.log(`da 2 sono ${monete2cent}`);
const monete5cent = Math.floor(Math.random() * 100) * 5;
console.log(`da 5 sono ${monete5cent}`);
const monete100cent = Math.floor(Math.random() * 100) * 100;
console.log(`da 100 sono ${monete100cent}`);
const totaleMacchinetta = monete1cent + monete2cent + monete5cent + monete100cent;
console.log(`totale ${totaleMacchinetta}`);
*/
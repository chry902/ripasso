
/*dai in input 10 interi, stampa il più grande ed il più piccolo*/

/*
let numero_maggiore;
let numero_minore;

for (let i = 0; i < 10; i++) {
    var numero_inserito = parseInt(prompt("inserisci un numero"));

    if (numero_inserito < numero_minore || i == 0) {
        numero_minore = numero_inserito
    }
    if (numero_inserito > numero_maggiore || i == 0) {
        numero_maggiore = numero_inserito;
    }


}


console.log(`il numero maggiore è ${numero_maggiore}`);
console.log(`il numero minore è ${numero_minore}`);

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


/*
const monete1cent = Math.floor(Math.random() * 100);
console.log(` da 1 sono ${monete1cent}`);
const monete2cent = Math.floor(Math.random() * 100);
console.log(`da 2 sono ${monete2cent}`);
const monete5cent = Math.floor(Math.random() * 100);
console.log(`da 5 sono ${monete5cent}`);
const monete100cent = Math.floor(Math.random() * 100);
console.log(`da 100 sono ${monete100cent}`);
const totaleMacchinetta = monete1cent + monete2cent + monete5cent + monete100cent;
console.log(`totale ${totaleMacchinetta}`);*/



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






let canzoni = [
    {
        titolo: `Sally`,
        cantante: `vasco rossi`,
        anno: 1990,
        genere: ["rock"]
    },
    {
        titolo: `november rain`,
        cantante: `guns n'roses`,
        anno: 1991,
        genere: ["rock"]
    },
    {
        titolo: `hotel california`,
        cantante: `eagles`,
        anno: 1977,
        genere: ["rock"]
    },
    {
        titolo: `lose yourself`,
        cantante: `eminame`,
        anno: 2002,
        genere: ["pop"]
    },
    {
        titolo: `la traviata`,
        cantante: `giuseppe verdi`,
        anno: 1853,
        genere: ["lirica"]
    },
    {
        titolo: `oroscopo`,
        cantante: `calcutta`,
        anno: 2016,
        genere: ["indie"]
    },

]

/* 
stampare in console.log i titoli di tutte le canzoni

for (let i = 0; i < canzoni.length; i++) {
    console.log(canzoni[i].titolo);

}



stampare in console.log la canzone più vecchia (in base all'anno)

let canzoneAnziana;

for (let i = 0; i < canzoni.length; i++) {
    const annoCanzoni = canzoni[i].anno;
    //console.log(annoCanzoni);

    if (annoCanzoni < canzoneAnziana || i == 0) {
        canzoneAnziana = annoCanzoni
    }


    // console.log(canzoneAnziana);
}

console.log(canzoneAnziana);



stampare in console.log il genere ripetuto più volte (assicurarsi perciò di usare un genere, es "Rock", per più canzoni) */

let generePiuAscoltato;

for (let i = 0; i < canzoni.length; i++) {
    const genereCanzoni = canzoni[i].genere;
    console.log(genereCanzoni);

    if () {

    }


}
//console.log(generePiuAscoltato);



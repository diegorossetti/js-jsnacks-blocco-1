console.log('ok');

/*************************************
 *****************************
 ********************

 *  JS | SNACKS - BLOCCO 1

 * ******************
 *****************************
 *************************************/


/**
 * Snack 1: L’utente inserisce due parole in successione, con due prompt.
 * Il software stampa la parola più lunga.
 * Utilizza una funzione per determinare e ritornare la parola più lunga.
 */

// L’utente inserisce due parole in successione, con due prompt.

console.log("SNACK 1 - PAROLA PIU' LUNGA");


var wordUs1 = prompt('Inserisci la prima parola').trim();

while (wordUs1 == '') {
    wordUs1 = prompt('Riprova, inserisci una parola')
 }

 var wordUs2 = prompt('Inserisci la seconda parola').trim();

 while (wordUs2 == '') {
     wordUs2 = prompt('Riprova, inserisci una parola')
 }


 // Stampo le due parole
 console.log('La prima parola:', wordUs1);
 console.log('La seconda parola:', wordUs2);


 var longerWord = wordLength(wordUs1, wordUs2);




 // Funzione
 function wordLength(word1, word2) {
      if (word1.length > word2.length) {
        return word1;
      } else if (word1.length < word2.length) {
        return word2;
      }
    return console.log('La lunghezza delle due parole è identica');

  }

 ///////////////////////////////////////////////////////////////////

 /**
  * Snack 2: Inserisci un numero
  * se è pari stampa il numero
  * se è dispari stampa il numero successivo
  */

console.log('SNACK 2 - PARI E DISPARI');

// Il numero lo facciamo inserire all'utente
var numUt = parseInt(prompt('Inserisci un numero'));

while (isAnInteger(numUt) == true) {
    numUt = parseInt(prompt('Riprova, inserisci un numero'));
}

console.log('Numero scelto:', numUt);

if (isPari(numUt) == true) {
    console.log('Il numero ' + numUt + ' è pari');
} else {
    console.log('il numero ' + numUt + ' è dispari, ecco il successivo: ' + ++numUt);
}


// Funzioni
function isPari(num) {
    if (num % 2 == 0) {
        return true;
    }
}

function isAnInteger(num) {
    if (isNaN(num)) {
        return true;
    }
}

 ///////////////////////////////////////////////////////////////////

/**
 * Snack 3: Generatore di “nomi cognomi” casuali
 * Prendendo una lista di nomi (‘Riccardo’, ‘Giovanni’, ‘Bob’)
 * e una lista di cognomi (‘Siffredi’, ‘Giovanardi’, ‘Marley’)
 * Gatsby vuole generare una falsa lista di 5 invitati.
 */

console.log('SNACK 3 - GATSBY PARTY');

var nameList = ['Riccardo', 'Giovanni', 'Bob'];
var surnameList = ['Siffredi', 'Giovanardi', 'Marley'];
var guests = [];
var RandomNum;

for (var i = 0; i < 5; i++) {
    var fullName = nameList[randomInteger(RandomNum)] + ' ' + surnameList[randomInteger(RandomNum)];
    guests.push(fullName);
}

console.log('Ecco gli invitati alla festa');
console.table(guests);

// Funzioni

function randomInteger (num) {
    return Math.floor(Math.random() * 3);
}

 ///////////////////////////////////////////////////////////////////

/**
 * Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3)
 * e fai la somma di tutti gli elementi che sono in posizione dispari.
 * Prova prima senza funzione e poi con funzione.
 */

console.log('SNACK 4 (BONUS) - SOMMA DISPARI');

var numbers = [2, 4, 2, 15, 120, 17, 3];
var somma = 0;
for (var i = 0; i < numbers.length; i++) {

    if (i % 2 !== 0) {
        somma += numbers[i]
    }
}

console.log('la somma dei numeri che nell\'array sono in posizione dispari è', somma);

/////////////////////////////////////////////////

console.log('SNACK 5 (BONUS++) - Confronto e popolazione Array');

/**
 * genera due array random
 * confrontali e popolali in maniera uguale
*/
var marco = [];
var vincenzo = [];
var differenza = 0;

for (var i = 0; i < randomInt(); i++){
  marco.push(randomInt());
}

for (var i = 0; i < randomInt(); i++){
  vincenzo.push(randomInt());
}

console.log("caramelle marco " + marco.length);
console.log("caramelle vincenzo " + vincenzo.length);

if (marco.length > vincenzo.length) {

  differenza = marco.length - vincenzo.length;

  console.log("Marco ha "+ differenza + " caramella di differenza")

  for (var j = 0; j < differenza; j++) {

    vincenzo.push(randomInt());
  }



} else if(vincenzo.length > marco.length){

  differenza = vincenzo.length - marco.length;

  console.log("Vincenzo ha "+ differenza + " caramella di differenza")
  for (var f = 0; f < differenza; f++){
    marco.push(randomInt());
  }



} else{

  console.log("Marco e Vincenzo hanno le stesse caramelle")

}

console.log(vincenzo);
console.log(marco);





// Funzioni
function randomInt(){
  return Math.floor(Math.random() * 10)+1;
}

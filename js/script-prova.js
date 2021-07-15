/*Il computer deve generare 16 numeri casuali tra 1 e 100,queste saranno le nostre bombe.

I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)


Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla
volta, sempre compreso tra 1 e 100.

L'utente non può inserire 2 volte lo stesso numero

Ogni volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un
altro numero.

Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.

Quando la partita termina, comunichiamo all'utente il suo punteggio.
  */
var totalNumbers = 100;
var totalBomb = 16;
var listBombNumbers = [];
var listUserNumber = [];
var round = totalNumbers - totalBomb;
var userLost = false;

while (listBombNumbers.length < totalBomb) {
  var generatorRandom = getRandomNumber(1, totalNumbers);
  if (!isInArray(generatorRandom, listBombNumbers)) {
    listBombNumbers.push(generatorRandom);
  }
}
console.table(listBombNumbers)


while (!userLost && listUserNumber.length < round) {
  //chiedo un numero e lo controllo
  var userChoice = getUserNumber(1, totalNumbers);
  // controllo che il numero sia nell'array
  if (isInArray(userChoice, listBombNumbers)) {
    alert("game over");
    userLost = true;
  } else {
    if (isInArray(userChoice, listUserNumber)) {
      //controllo che il numero non sia nell'array
      alert("numero già inserito")

    } else {
      listUserNumber.push(userChoice);
    }
  }
}
if (userLost) {
  alert("hai perso!!!!! hai totalizato :" + " " + listUserNumber.length + " " + "punti")
} else {
  alert("hai VINTO   !!!! hai totalizato :" + "  " + listUserNumber.length + " " + "punti")

}
console.log("hai vinto")

//! *********** funzioni */
/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * controlla che un dato elemento sia presente in dato array
 * @param {*} needle
 * @param {*} arr
 * @returns {boolean}
 */
function isInArray(needle, arr) {
  var found = false;
  var i = 0;
  while (!found && i < arr.length) {
    if (needle === arr[i]) {
      found = true;
    }
    i++;
  }
  return found;
}
/**
 * cliedo all'utente un numero finche non è valido(compreso tra min e max)
 * @param {*} min
 * @param {*} max
 * @returns
 */
function getUserNumber(min, max) {
  var number;
  do {
    number = prompt("inserisci un numero da " + min + "a " + max);
  } while (!isNumber(number) || number < min || number > max);
  return parseInt(number);
}

/**
 * controlla meglio se un valore è un numero
 * @param {*} num
 * @returns
 */
function isNumber(num) {
  if (!num || num.trim() === "" || isNaN(num)) {
    return false;
  } else {
    return true;
  }
}

// var messageWelcom = alert("BENVENUTO IN CAMPO MINATO \n Regole: \n1- Inserisci un numero da 1 a 100 \n2- I numeri non devono ripetersi \n3- Se inserisci un numero BOMBA perdi la partita \n4- Se inserisci un numero non BOMBA passi al turno successivo e guadagni 1 punto  \n                              Se è tutto chiaro premi \"OK\" e.....\n                              BUON DIVERTIMENTO....!!  ")

// var numberUser = prompt("Inserisci un numero da 1 a 100", "50");
// listUserNumber.push(numberUser)

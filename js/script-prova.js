//! ************************************************************** 
/*
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi. Ad esempio :Di cosa
ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :occhiolino:
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Scriviamo prima in modo che tutto funzioni e poi studiamo il codice per trovare opportunità di miglioramento (inserire
funzioni, pulire variabili superflue ecc).
Non è necessario stampare in pagina, chi vuole può farlo, in file separato, ma solo dopo che l'esercizio base funziona
con prompt/alert/console.log
Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve il ciclo…? :linguaccia:
PS in allegato il ragionamento fatto insieme a fine lezione
*/



//? ********************************************************
/*  Consegna
Il computer deve generare 16 numeri casuali tra 1 e 100,queste saranno le nostre bombe.

I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)


Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla
volta, sempre compreso tra 1 e 100.

L'utente non può inserire 2 volte lo stesso numero

Ogni volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un
altro numero.

Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.

Quando la partita termina, comunichiamo all'utente il suo punteggio.
*/
//? ********************************************************

/* 
! ******************* LOGICA ************************
? 1- Creare un generatore di **16** numeri random  compresi tra 1 e 100
   * il generatore deve essere avviato solo 1 volta all'avio della partita
  todo : ************* VALIDAZIONE ************* 
   * i 16 numeri generati non devo essere uguali 
   * se il numero generato è già presente continua a generare
? 2- Chiedere all'utente di inserire ad ogni turno 1 numero tra 1 e 100 per N volte dove N è uguale a 100 - 16(i numeri bomba)
  todo : ************* VALIDAZIONE ************* 
   * 1- l'utente deve inserire solo numeri 
   * 2- i numeri inseriti devo essere compresi tra 1 e 100
   * 3- i numeri inseiti non devono ripetersi
   todo:************* SE NON VENGONO RISPETTATE 1-2-3**************
   * continua a chiedere senza passare al turno successivo e dando un messaggio riferito all'errore
   todo:************* SE VENGONO RISPETTATE 1-2-3**************
   * controlla se è stato inserito un numero delle 16 bombe ( in tal caso la partita è finita)
                                                           todo: se la partita finisce comunica il punteggio (numero di turno)
   * passa al turno successivo(inserimento del numero successivo) assegnando 1 punto
  */



//! ********** PROGRAMMA **********

// Variabili 
//inserimento numero utente
var messageWelcom = alert("BENVENUTO IN CAMPO MINATO \n Regole: \n1- Inserisci un numero da 1 a 100 \n2- I numeri non devono ripetersi \n3- Se inserisci un numero BOMBA perdi la partita \n4- Se inserisci un numero non BOMBA passi al turno successivo e guadagni 1 punto  \n                              Se è tutto chiaro premi \"OK\" e.....\n                              BUON DIVERTIMENTO....!!  ")
// numero utente 
//!!!!!!!!!!!!!!!!!!!! var numberUser = parseInt(prompt("Inserisci un numero da 1 a 100"+" \n1/(100-numberBomb)","50"));
// lista di numeri bomba generati in automatico all'avvio della pagina (16 numeri) (viene controllato prima di ogni pusch)
var listBombNumbers = [];
// lista di numeri inseriti dall'utente( si aggiorna ad ogni pusch e viene controllata prima di ogni pusch)
var listNumberInsertedUser = [];
// punteggio(numero di turno)
var score = listNumberInsertedUser.length;
// Numero delle bombe (difficoltà)
var numberBomb = "16";
// numero di tentativi rimasti
var round = (100 - numberBomb);
// variabile d'appoggio per stabilire se il gioco deve proseguire o no        
var inGame = true;
// var per vedere quante partite mancano 
// var remainingNumbers = (round - score);


//? ***** VALIDATION *****
//ciclo per inserire i 16 numeri in listBombNumbers
//* continua a generare numeri compresi tra 1 e 100 fino a quando in listBombNumbers non sono presenti 16 numeri diversi
while (listBombNumbers.length < numberBomb) {
  var generatorRandom = Math.floor((Math.random() * 100) + 1);
  if (!listBombNumbers.includes(generatorRandom)) {
    listBombNumbers.push(generatorRandom);
  }
}
console.table(listBombNumbers);

//! controllare il numero inserito dall'utente 
//* controllare se non è uguale a un numero bomba 
//* se è uguale al numero bomba la patita termina e ariva un allert partita terminata e viene comunicato il punteggio 
//* controllare se è diverso da quelli presenti nell'array
//* inserisci il numero nell'array e assegna un punto
//* ripetere il ciclio fino ad attivare a 100- numero delle bombe 



// CHIEDERE UN NUMERO AL''UTENTE
// VERIFICARE SE: 1 - NON è PRESENTE NELLA LISTA BOMBA ALTRIMENTI PARTITA FINITA
//                2 - NON è STATO GIà INSERTIO ALTRIMENTI RICHIEDERE IL NUMERO 
var numberUser = prompt("Inserisci un numero da 1 a 100" + " \n1/(100-numberBomb)", "50");
listNumberInsertedUser.push(numberUser)

// do {
//   if (listBombNumbers.includes(numberUser)) {
//     console.log("hai perso");
//     inGame = false;
//   } else if (listNumberInsertedUser.includes(numberUser)) {
//     numberUser = parseInt(prompt("Inserisci un numero da 1 a 100" + " \n1/(100-numberBomb)", "50"));
//   } else {

//   }
// } while (inGame || remainingNumbers == 0)
console.table("i numeri inseriti sono: ", listNumberInsertedUser)
console.log("round", round)
console.log("score", listNumberInsertedUser.length)
console.log("numero di bombe", listBombNumbers.length)
var remainingNumbers = round - score;
console.log("partite rimanenti", remainingNumbers)






// var a = [50, 10, 10, 10, 1, 010, 10, 10, 10,];
// var b = (5 + 5);
// var c = a.length - b;
// var d = (c + b) - a;
// console.log(d)

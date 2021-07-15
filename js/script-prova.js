
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
 
 var numberBomb = "16";
 var listBombNumbers = [];
 var listUserNumber = [];
 var round = (100 - numberBomb);
 var inGame = true;
 
 while (listBombNumbers.length < numberBomb ){
   var generatorRandom = Math.floor((Math.random() * 100) + 1);
   if (!listBombNumbers.includes(generatorRandom)) {
     listBombNumbers.push(generatorRandom);
       }
 }

 






var messageWelcom = alert("BENVENUTO IN CAMPO MINATO \n Regole: \n1- Inserisci un numero da 1 a 100 \n2- I numeri non devono ripetersi \n3- Se inserisci un numero BOMBA perdi la partita \n4- Se inserisci un numero non BOMBA passi al turno successivo e guadagni 1 punto  \n                              Se è tutto chiaro premi \"OK\" e.....\n                              BUON DIVERTIMENTO....!!  ")




var numberUser = prompt("Inserisci un numero da 1 a 100", "50");
listUserNumber.push(numberUser)




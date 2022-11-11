// PALIDROMA
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (split, join, sort, ….)

// PARI E DISPARI
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Se l’utente ha scritto “pari” e la somma è pari, ha vinto l’utente
// Se l’utente ha scritto “pari” e la somma è dispari, ha vinto il pc

//-----------------------------------------------------------------------

// OBIETTIVI: 
// 1.Far scegliere all'utente pari o dispari e chiedere un numero da 1 a 5 
// 2.Generare un numero da 1 a 5 per il pc
// 3.Sommare entrambi i numeri
// 4.Determinare se un numero è pari o dispari
// 5.Dichiarare il vincitore o il pareggio

// STEP 1: Far scegliere all'utente pari o dispari
// - promt per chiedere un numero da 1 a 5
// - verificare se il numero è tra 1 e 5

const userPariDispari = prompt("Ciao! cosa preferisci scegliere pari o dispari?");
console.log("l'utente ha scelto", userPariDispari);
const userNum = prompt("Ora, scegli un numero da 1 a 5 e scrivilo qui sotto");
console.log("l'utente ha scritto", userNum);

if ( userPariDispari !== "pari" && userPariDispari !== "dispari" ) {
    alert("mi dispiace, ma non hai inserito la parola giusta");
}else if ( isNaN(userNum) || userNum < 1 || userNum > 5 ){ //usiamo l'else if per specificare la condizione, mentre con l'else non si può
    alert("ma noooo, un numero tra 1 e 5 ");
}


// STEP 2: Generare un numero da 1 a 5 per il pc
// - uso una funzione ed un calcolo per generare un numero tra 1 e 5

function numRandom(min, max){
    return Math.floor(Math.random()  * (1 + max - min) + min);
}

const risultatoRandom = numRandom(1, 5);
console.log("numero random per pc", risultatoRandom);




// STEP 3: Sommare entrambi i numeri
// - sommo il risultato del pc con quello dell'utente 

const sommaUserPc = parseInt(userNum) + risultatoRandom;
console.log("somma dei due insiemi", sommaUserPc);


// STEP 4 + 5: Determinare se il numero è pari o dispari e dichiarare il vincitore 
// - utilizzo un if per validare il risultato (pari o dispari) 
// - alleggo anche un alert per dichiarare il vincitore 



if (sommaUserPc % 2 === 0 && userPariDispari == 'pari'){
    alert("Ottimo! sei il vincitore!");
    console.log("bravo hai vinto!");
}else if (sommaUserPc % 2 !== 0 && userPariDispari == 'dispari'){
    alert("Ottimo! sei il vincitore!");
    console.log("sorry");
} else {
    alert('hai perso!');
}





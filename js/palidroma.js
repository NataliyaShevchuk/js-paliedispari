// PALIDROMA
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (split, join, sort, ….)

const userName = prompt("ciao dimmi una parola che vuoi!");

function getNamePalindromo(wordReverse){
    // wordReverse.split("").reverse("").join("")
    return wordRev = wordReverse.split("").reverse("").join(""); //modo che spezzetta la parola in lettere individuali, la reversa e la unisce per farla leggere al browser
}

const palindromo = getNamePalindromo(userName);
console.log(palindromo);

//condizione per dichiarare all'utente se la parola è corretta o meno
if (userName === palindromo){
    alert("Fantastico! hai usato la parola giusta");
} else{
    alert("Simone T. ti osserva, attento agli errori (non fare il furbo)");
}


// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var arrayPc = [];
var elemento;
//***************CREAZIONE E INSERIMENTO 16 CIFRE IN ARRAY SOFTWARE
while (arrayPc.length < 16) {
    var numero = numCreation(elemento, arrayPc);
}
console.log(arrayPc);

//******************RICHIESTA A UTENTE, CONTROLLO E RISPOSTA
var arrayUtente = [];
var score = 0;

do {
    var numero2 = parseInt(prompt('Inserisci un numero intero da 1 a 100'));
    if (trovaElemento(arrayUtente, numero2)) {
        var allerta1 = alert('Il numero che hai inserito è già esistente.');

    } else {
        arrayUtente.push(numero2);
        score += 1;
    }
} while (!trovaElemento(arrayPc, numero2)) {
    var allerta2 = alert('Mi dispiace, hai perso. Il tuo punteggio è ' + score + '.');
}
console.log(arrayUtente);

//***********FUNZIONI
function numCreation(a, b) {
    var a = Math.floor(Math.random() * 100) + 1;
    if (b.includes(a)) {
        var f = Math.floor(Math.random() * 100) + 1;
    } else {
    b.push(a);
    }
}

function trovaElemento(c, d) {
   var i=0;
   while (i < c.length ) {
       if( d == c[i]){
           return  true;
       }
       i++;
   }
   return false;
}

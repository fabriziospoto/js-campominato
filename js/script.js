// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var arrayPc = [];
var arrayUtente = [];
var elemento;
//***************CREAZIONE E INSERIMENTO 16 CIFRE IN ARRAY SOFTWARE
while (arrayPc.length < 16) {
    var numero = numCreation(elemento, arrayPc);
}
console.log(arrayPc);

//******************RICHIESTA A UTENTE E CONTROLLO
for (var i = 0; i < 84; i++) {
    var richiesta = parseInt(prompt('Inserisci un numero intero'));
    if (arrayUtente.includes(richiesta)) {
        var attenzione = prompt('Attenzione, il numero che hai inserito è già esistente!');
    } else {
        arrayUtente.push(richiesta);
    }
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

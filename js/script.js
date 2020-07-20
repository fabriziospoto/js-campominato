// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


var arrayPc = [];

//***************CREAZIONE E INSERIMENTO 16 CIFRE IN ARRAY SOFTWARE
// for (var i = 0; i < 16; i++) {
//     var elemento;
//     var inserimento1 = numCreation(elemento, arrayPc);
//     var trovatoPc = trovaElemento(arrayPc, elemento);
//     if (elemento != arrayPc[i]) {
//         // var inserimento2 = numCreation(elemento, arrayPc);
//
//     }
// }
i = 0
var inserimento1;
while (i < 16) {
    inserimento1 = numCreation(elemento, arrayPc);
    i++;
}
console.log(arrayPc);



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

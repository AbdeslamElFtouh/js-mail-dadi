// 1) Generare un numero casuale compreso tra 1 e 6 (math.random) 
//    sia per il giocatore che per il computer;
// 2) Confrontare i numeri e stabilire qual'è il maggiore;

alert('Ciao! Premi invio per tirare il dado!');

let dado_user = Math.floor (Math.random() * 6) + 1;
alert('Ti è uscito:'+' '+ dado_user);

let dado_computer = Math.floor (Math.random() * 6) + 1;
alert('Al tuo avversario è uscito:'+' '+ dado_computer);

if (dado_computer < dado_user){
    alert('Hai vinto!!');
} else if (dado_computer > dado_user) {
    alert('Ops... Riprova!!');
} else {
    alert("E' un pareggio... Peccato...");
}


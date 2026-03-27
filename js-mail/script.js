// 1) Crea una lista di email di invitati ad una festa;
// 2) chiedi all'utente la sua email;
// 3) controlla che sia nella lista di chi può accedere;
// 4) stampa un messaggio con l'esito del controllo (suggerito ciclo FOR);

let nomi_da_verificare = prompt('Ciao, inserisci qui il tuo nome');
let nome_minuscolo = nomi_da_verificare.toLowerCase();

const invitati = ['Marco','Sandro','Pietro','Alessandro','Riccardo','Pierluigi','Leone','Ugo','Stefano','Napoleone']

for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] === nomi_da_verificare) {
        alert('Benvenuto'+ ' ' + nomi_da_verificare + '!');
        break;
    } else {
        alert('Mi dispiace'+ ' ' + nomi_da_verificare + ', ' + 'ma non riesco a trovare il tuo nome...');
        break;
    }
}
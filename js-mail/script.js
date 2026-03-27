// 1) Crea una lista di email di invitati ad una festa;
// 2) chiedi all'utente la sua email;
// 3) controlla che sia nella lista di chi può accedere;
// 4) stampa un messaggio con l'esito del controllo (suggerito ciclo FOR);

const invitati = ['Marco','Sandro','Pietro','Alessandro','Riccardo','Pierluigi','Leone','Ugo','Stefano','Napoleone']

let nomi_da_verificare = prompt('Ciao, inserisci qui il tuo nome');
let trovato = false;

for (let i = 0; trovato === true || i < invitati.length; i++) {
    if (invitati[i] === nomi_da_verificare) {
        trovato = true;
        alert('Benvenuto'+ ' ' + nomi_da_verificare + '!');
    } 
}

if (trovato === false) {
        alert('Mi dispiace'+ ' ' + nomi_da_verificare + ', ' + 'ma non riesco a trovare il tuo nome...');
    }

    // Correzione: 
    // 1) evito di usare 'break' perchè è un uscita forzata dal ciclo, piuttosto complico la condizione "if" 
    //    aggiungendo di uscire dal ciclo se viene trovato il nome;
    // 2) utilizzare variabile di supporto "trovato";

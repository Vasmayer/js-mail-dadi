/* // # Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.

BONUS
Stampare i risultati in pagina oltre che in console!
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

/* ESERCIZIO MAIL */

const messageElement = document.getElementById('message');
const emails = ['email-1@gmail.com','email-2@gmail.com','email-3@gmail.com','email-4@gmail.com','email-5@gmail.com','email-6@gmail.com'];
const userEmail = prompt('Inserisci la tua E-mail!');   

let message = '';

if(emails.includes(userEmail))
{
    message = `
    <div class="alert alert-success" role="alert">
        L'email è presente nel database!
    </div>
    `;
    console.log('email presente nel database');
} 
else
{
    message = `
    <div class="alert alert-danger" role="alert">
        L'email non è presente nel database!
    </div>
    `;
    console.log('email NON presente nel database');
}

messageElement.innerHTML = message;
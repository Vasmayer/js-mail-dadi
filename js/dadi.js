/* // # Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.
BONUS
Stampare i risultati in pagina oltre che in console!
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */ 

/* get elements */
const computerElement = document.getElementById('computer');
const playerElement = document.getElementById('player');
const messageElement = document.getElementById('message');

/* create random numbers */
const numberComputer = Math.floor((Math.random() * 6) + 1);
const numberPlayer = Math.floor((Math.random() * 6) + 1);

/* print in console */
console.log(`Number Computer: ${numberComputer}`);
console.log(`Number Player: ${numberPlayer}`);

let message;
let colorComputer;
let colorPlayer;

/* if two number ar equal */
if(numberComputer === numberPlayer)
{
    message = `
    <div class="alert alert-info" role="alert">
        C'è stato un pareggio
    </div>
    `
    colorComputer = 'color-blue';
    colorPlayer = 'color-blue';

    console.log("C'è stato un pareggio");
}
/* if number of computer is greater */
else if(numberComputer > numberPlayer)
{
    message = `
    <div class="alert alert-danger" role="alert">
        Mi dispiace hai perso!
    </div>
    `
    colorComputer = 'color-green';
    colorPlayer = 'color-red';

    console.log('Mi dispiace hai perso!');
}
/* if number of player is greater */
else
{
    message = `
    <div class="alert alert-success" role="alert">
        Complimenti! hai vinto!
    </div>
    `
    console.log('Complimenti! hai vinto!');

    colorComputer = 'color-red';
    colorPlayer = 'color-green';
}

/* print on DOM */
computerElement.innerHTML = `<div class="${colorComputer}"><i class="fas fa-desktop"></i> ${numberComputer} </div>`;
playerElement.innerHTML = `<div class="${colorPlayer}"><i class="fas fa-user"></i> ${numberPlayer}</div>`;
messageElement.innerHTML = message;


// dichiaro offerta
let offerta;

// Funzione click del primo bottone
send.addEventListener(`click`, function(){

    // Dichiaro le variabili .value
    const name = document.getElementById(`name`).value;
    
    const km = parseInt(document.getElementById(`km`).value);
    console.log(km);
    
    const age = document.getElementById(`age`).value;

    // Stampa alert se km non è numero o è minore di 0
    if (isNaN(km) || km < 0){
        alert(`Dati non validi`);
    };

    // Calcolo partialprice
    let partialprice = km * 0.21;
    console.log(partialprice);

    // SE l'età è uguale a minorenne
    if(age == `minorenne`){

        // Calcolo il prezzo finale con sconto applicato
        finalprice = partialprice * 0.2;
        offerta = `20% di sconto`;

        // Stampo il tutto generando il biglietto
        document.getElementById(`nome`).innerText = name;
        document.getElementById(`discount`).innerText = offerta;
        document.getElementById(`price`).innerText = finalprice.toFixed(2) + ` €`;
        document.getElementById(`carriage`).innerText = Math.floor(Math.random()* 20 + 1);
        document.getElementById(`code`).innerText = Math.floor(Math.random()* 99999 + 1);
    }

    // ALTRIMENTI SE l'età è uguale a senior(over 65)
    else if(age == `senior`){

        // Calcolo il prezzo finale con sconto applicato
        finalprice = partialprice * 0.4;
        offerta = `40% di sconto`;

        // Stampo il tutto generando il biglietto
        document.getElementById(`nome`).innerText = name;
        document.getElementById(`discount`).innerText = offerta;
        document.getElementById(`price`).innerText = finalprice.toFixed(2) + ` €`;
        document.getElementById(`carriage`).innerText = Math.floor(Math.random()* 20 + 1);
        document.getElementById(`code`).innerText = Math.floor(Math.random()* 99999 + 1);
    }

    // ALTRIMENTI SE l'età è uguale a maggiorenne (tra 18 e 65)
    else if (age == `maggiorenne`){

        // Genero il prezzo finale senza applicare sconti
        finalprice = partialprice;
        offerta = `Tariffa base`;

        // Stampo il tutto generando il biglietto
        document.getElementById(`nome`).innerText = name;
        document.getElementById(`discount`).innerText = offerta;
        document.getElementById(`price`).innerText = finalprice.toFixed(2) + ` €`;
        document.getElementById(`carriage`).innerText = Math.floor(Math.random()* 20 + 1);
        document.getElementById(`code`).innerText = Math.floor(Math.random()* 99999 + 1);
    }

    // Ridò il display none alla tabella del biglietto altrimenti non si vedranno i biglietti stampati dopo aver schiacciato reset la prima volta
    const santino = document.getElementById(`santino`);
    santino.classList.remove(`d-none`);
});


const annullare = document.getElementById(`annullare`);

// Funzione click del secondo bottone
annullare.addEventListener(`click`, function(){

    // Rimuovo il display none per cancellare il biglietto
    const santino = document.getElementById(`santino`);
    santino.classList.add(`d-none`);
});

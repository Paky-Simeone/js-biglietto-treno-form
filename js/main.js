// let name;
// let age;
// let km;
// let discount;
// let carriage;
// let code;
// let price;

// Output
// const send = document.getElementById(`send`);
// const discount = document.getElementById(`discount`);
// const carriage = document.getElementById(`carriage`);
// const code = document.getElementById(`code`);
// const price = document.getElementById(`price`);
let offerta;

send.addEventListener(`click`, function(){

    const name = document.getElementById(`name`).value;
    
    const km = parseInt(document.getElementById(`km`).value);
    console.log(km);
    
    const age = document.getElementById(`age`).value;

    if (isNaN(km) || km < 0){
        alert(`Dati non validi`);
    };

    let partialprice = km * 0.21;
    console.log(partialprice);

    if(age == `minorenne`){
        finalprice = partialprice * 0.2;
        offerta = `20% di sconto`;
        document.getElementById(`nome`).innerText = name;
        document.getElementById(`discount`).innerText = offerta;
        document.getElementById(`price`).innerText = finalprice.toFixed(2) + ` €`;
        document.getElementById(`carriage`).innerText = Math.floor(Math.random()* 20 + 1);
        document.getElementById(`code`).innerText = Math.floor(Math.random()* 99999 + 1);
    }
    else if(age == `senior`){
        finalprice = partialprice * 0.4;
        offerta = `40% di sconto`;
        document.getElementById(`nome`).innerText = name;
        document.getElementById(`discount`).innerText = offerta;
        document.getElementById(`price`).innerText = finalprice.toFixed(2) + ` €`;
        document.getElementById(`carriage`).innerText = Math.floor(Math.random()* 20 + 1);
        document.getElementById(`code`).innerText = Math.floor(Math.random()* 99999 + 1);
    }
    else if (age == `maggiorenne`){
        finalprice = partialprice;
        offerta = `Tariffa base`;
        document.getElementById(`nome`).innerText = name;
        document.getElementById(`discount`).innerText = offerta;
        document.getElementById(`price`).innerText = finalprice.toFixed(2) + ` €`;
        document.getElementById(`carriage`).innerText = Math.floor(Math.random()* 20 + 1);
        document.getElementById(`code`).innerText = Math.floor(Math.random()* 99999 + 1);
    }
})

annullare.addEventListener(`click`, function(){
    const annullare = document.getElementById(`annullare`);
    
    const santino = document.getElementById(`santino`);
    santino.classList.remove(`d-none`);
})

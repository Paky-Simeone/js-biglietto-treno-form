// let name;
// let age;
// let km;
// let discount;
// let carriage;
// let code;
// let price;

// Output
const send = document.getElementById(`send`);
const discount = document.getElementById(`discount`);
const carriage = document.getElementById(`carriage`);
const code = document.getElementById(`code`);
const price = document.getElementById(`price`);


send.addEventListener(`click`, function(){

    const name = document.getElementById(`name`);
    
    const km = parseInt(document.getElementById(`km`).value);
    console.log(km);
    
    const age = document.getElementById(`age`).value;

    if (isNaN(km) || km < 0){
        alert(`Dati non validi`);
    };

    let partialprice = km * 0.21;
    console.log(partialprice);

    if(age == minorenne){
        
    }
    
})

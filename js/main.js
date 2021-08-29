// VERIFICO CHE IL NOME DEL BURGER VENGA INSERITO

document.getElementById('btn').addEventListener('click', function(){
    let nameBurger = document.getElementById('burgerName').value;
    console.log(nameBurger);
    if(nameBurger.length < 1 || nameBurger == ' '){
        alert('Insert a Burger Name')
    }else{
        calculatePrice();
    }
})

//FUNZIONE CALCOLATORE PREZZO
function calculatePrice(){
    let coupon = ['BOOLEAN00', 'ANDREA00','DARIO00'];
    let priceFixed = 50;
    let subTotal = 0;
    const discount = document.getElementById('couponCode').value;
    const ingredient = document.getElementsByClassName('add1');
    

    for (let i=0; i < ingredient.length; i++){
        if (ingredient[i].checked)
        subTotal += parseInt(ingredient[i].value)
    }

    console.log(discount)
    if (coupon.includes(discount)) {
    prezzoFinale = (subTotal + priceFixed) * 0.8;
    }   
    else {
    prezzoFinale = subTotal + priceFixed;
    } 

    document.getElementById('finalPrice').innerHTML = '$' + prezzoFinale.toFixed(2);

}




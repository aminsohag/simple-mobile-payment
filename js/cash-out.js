document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashAmount = document.getElementById('cash-out-amount').value;
    const cashOutAmount = parseFloat(cashAmount);

    const cashOutPin = document.getElementById('cash-out-pin').value;
    if(cashOutPin === '1234'){
        const cashBalance = document.getElementById('balance').innerText;
        const tmp = document.getElementById('balance');
        const cashOutBalance = parseFloat(cashBalance);

        const newBalance = cashOutBalance - cashOutAmount;
        tmp.innerText = newBalance;

    }
    else{
        alert('wrong password or pin!');
    }
})
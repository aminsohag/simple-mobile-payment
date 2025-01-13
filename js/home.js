// step -1:
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('btn clicked');

    // step-2:
    const inputAmount = document.getElementById('input-amount').value;
    console.log(inputAmount);

    // step-3:
    const pinNumber = document.getElementById('input-pin').value;
    console.log(pinNumber);
    if(pinNumber === '1234'){
        const oldBalance = document.getElementById('balance').innerText;
        const newBalance = parseInt(oldBalance) + parseInt(inputAmount);
        balance.innerText = newBalance;

    }
    else{ 
        alert('Failed to add Money! Please try again');
    }

})

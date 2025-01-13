// step-1:
document.getElementById('login-btn').addEventListener('click', function(event){
    // step-2:
    event.preventDefault();
    console.log('login button');
    // step-3:
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // step-4:
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('login successfully');
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong phone number or pin')
    }
});
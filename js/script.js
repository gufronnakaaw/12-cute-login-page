// author : gufronnakaaw
// date : 6-12-2020

const btnEye = document.querySelector('#btn-eye');
const inputPassword = document.querySelector('#password-login');

btnEye.addEventListener('click', function(e){
    if( inputPassword.type == 'password' ){
        btnEye.setAttribute('class', 'fa fa-eye-slash');
        inputPassword.type = 'text';
    } else {
        
        btnEye.setAttribute('class', 'fa fa-eye');
        inputPassword.type = 'password';
    }

});
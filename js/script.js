const inputPassword = document.querySelector('#input_password')
const inputEmail = document.querySelector('#input_email')
const eyeOff = document.querySelector('.eye-off')
const eyeOn = document.querySelector('.eye-on')
const btnLogin = document.querySelector('.btn_login')
const textErroEmail = document.querySelector('#text_erro_email')
const textErrorPass = document.querySelector('#text_erro_pass')



eyeOff.addEventListener("click", function(){
    eyeOff.style.display = "none"
    inputPassword.setAttribute('type', 'text')
})
eyeOn.addEventListener("click", function(){
    eyeOff.style.display = "flex"
    inputPassword.setAttribute('type', 'password')
})


btnLogin.addEventListener("click", function(e){
   e.preventDefault()
    if(validarEmail(inputEmail.value) != true){
        textErroEmail.innerText = "Digite um email válido"
        inputEmail.classList.add('error')
    }if(inputPassword.value == ""){
        textErrorPass.innerText = "Senha é obrigatorio"
        inputPassword.classList.add('error')
    } if(inputEmail.value == ""){
        textErroEmail.innerText = "Email é obrigatorio"
        inputEmail.classList.add('error')
    }   
})


function validandoInput(){
    if(inputEmail.value != "" && validarEmail(inputEmail.value) == false){
        textErroEmail.innerText = " "
    }if(inputPassword.value != ""){
        textErrorPass.innerText = " "
    }
    
}

function validarEmail(email) {
    const emailValidado = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidado.test(email);
  }

console.log(textErroEmail)


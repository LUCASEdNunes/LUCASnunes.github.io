const uid =document.getElementById("uid");
const tel =document.getElementById("tel");
const email =document.getElementById("email");
const pwd =document.getElementById("pwd");
const pwd2 =document.getElementById("pwd2");
const nome =document.getElementById("nome");
const cpf =document.getElementById("cpf");
const nasc =document.getElementById("nasc");
const lic =document.getElementById("lic");

function validate (item){
    item.setCustomValidity('');
    item.checkValidity();


if (item == pwd2) {
    if (item.value == pwd.value) {
        item.setCustomValidity('');
    }else{
        item.setCustomValidity('As senha não bate')
    }
 }
}


function maskTel() { 
    let strtel = tel.value;
    if(strtel.length == 2){
        tel.value = "("+ tel.value + ")";
    }
    if(strtel.length == 10)
     tel.value += "-";
}
tel.addEventListener('input',maskTel);



pwd2.addEventListener("input", function() { validate(pwd2) });

pwd.addEventListener('invalid', function() {
  if (pwd.value == "") {
      pwd.setCustomValidity("Não pode estar em branco");
  } else {
      pwd.setCustomValidity("Pelo menos 8 caracteres");
  }
});

// Adicionando evento de cálculo da idade ao campo de data de nascimento
nasc.addEventListener("change", calcularIdade);

pwd2.addEventListener("input", function(){validate(pwd2) });

pwd.addEventListener('invalid',function(){
  if(pwd.value == ""){
    pwd.setCustomValidity("não deixa em branco")
  }else{
    pwd.setCustomValidity("Pelo menos 8 caracteres")
  }
})
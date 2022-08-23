const emailEsperado = "ryee@ibm.com.br";
const senhaEsperada = "cocornzula";

const form = document.getElementById("form");

const inputEmail = document.querySelector("#form input[type=email]");
const inputSenha = document.querySelector("#form input[type=password]");
const buttonSubmit = document.querySelector("#form button[type=submit]");

inputEmail.addEventListener(
    "blur",
    ()=>{
        if(inputEmail === null){
            alert("Preencha o email")
        } else {
            return
        }
    }
);
import {ApiRequest} from "../src/cadastro.js"

class Signup{
    static novoUsuario(){
        const usuario = document.getElementById("usuario")
        const email = document.getElementById("email")
        const fotoPerfil = document.getElementById("foto-perfil")
        const senha = document.getElementById("senha")
        const botaoCadastrar = document.getElementById("botao-cadastar")
        botaoCadastrar.addEventListener("click", async(event) =>{
            event.preventDefault
            const data = {
                username: usuario.value,
                email: email.value,
                avatarUrl: fotoPerfil.value,
                password: senha.value
              }
              
              await ApiRequest.cadastro(data)
        })

    }
}
Signup.novoUsuario()
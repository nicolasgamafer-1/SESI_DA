function login() {
    // 1º Acessar o valor digitado nos campos USUARIO e SENHA
    const cmapo_usuario = document.getElementById("usuario").value;
    const campo_senha = document.getElementById("senha").value;

    // 2º carregar os valores do localStorange
    const local_usuario = localStorage.getItem("usuario");
    const local_senha = localStorage.getItem("senha");

    // 3º Validar se o valores digitados são iguais aos valores armazenados no localStorage
    if (cmapo_usuario == local_usuario && campo_senha == local_senha) {
        alert("Login realizado com sucesso! 👍");
    } else {
        alert("Usuário ou senha inválidos! 👎");
    }

}


function cadastro() {

    const usuarioExistente = localStorage.getItem("usuario");

    if (usuarioExistente) {
        alert("Você já possui um cadastro realizado! Faça o login.");
        window.location.href = "login.html"; // Opcional: já joga o usuário para a tela de login
        return; // Para a execução da função para não cadastrar de novo
    }

    else{
        const usuario = document.getElementById("cadastro_usuario").value;
    const senha = document.getElementById("cadastro_senha").value;
    const nome = document.getElementById("nome").value;
    const palavra_passe = document.getElementById("palavra_passe").value;


    // Cadastrar os dados no localStorage
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);
    localStorage.setItem("nome", nome);
    localStorage.setItem("palavra_passe", palavra_passe);

    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";
    }


}


function recuperar_senha() {

     // 1º Acessar o valor digitado nos campos USUARIO e SENHA
    const cmapo_usuario = document.getElementById("nome").value;
    const campo_senha = document.getElementById("palavra_passe").value;

    // 2º carregar os valores do localStorange
    const local_usuario = localStorage.getItem("nome");
    const local_senha = localStorage.getItem("palavra_passe");

    // 3º Validar se o valores digitados são iguais aos valores armazenados no localStorage
    if (cmapo_usuario == local_usuario && campo_senha == local_senha) {
        window.location.href = "recuperando.html";
    } else {
        alert("não sabe nem teu nome");
    }
}

function recuperar() {

    const usuario = document.getElementById("cadastro_usuario").value;
    const senha = document.getElementById("cadastro_senha").value;


    // Cadastrar os dados no localStorage
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);

    alert("realizado com sucesso!");

    window.location.href = "login.html";
}

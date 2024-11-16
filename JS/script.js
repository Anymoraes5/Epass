// Carrega o conteúdo do cabeçalho
fetch("header.html")
    .then(response => response.text())  // Pega o conteúdo do arquivo header.html
    .then(data => {
        // Insere o conteúdo carregado no lugar do "header-placeholder"
        document.getElementById("header-placeholder").innerHTML = data;
        
    })
    .catch(error => {
        // Em caso de erro ao carregar o cabeçalho
        console.error("Erro ao carregar o cabeçalho:", error);
    });

// Carrega o conteúdo do cabeçalho
fetch("sidebar.html")
    .then(response => response.text())  // Pega o conteúdo do arquivo header.html
    .then(data => {
        // Insere o conteúdo carregado no lugar do "header-placeholder"
        document.getElementById("side-bar").innerHTML = data;
        
    })
    .catch(error => {
        // Em caso de erro ao carregar o cabeçalho
        console.error("Erro ao carregar o cabeçalho:", error);
    });
 //Função de login (simples, apenas para exemplo)
 function login(event) {
    event.preventDefault(); // Impede o envio do formulário

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validação simples de login (aqui seria ideal um backend)
    if(username === "admin" && password === "12345") {
        alert("Login bem-sucedido!");
        // Redireciona para a página principal após o login
        window.location.href = "home.html"; // ou qualquer outra página
    } else {
        alert("Credenciais inválidas");
    }
}

$(document).ready(function(){
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});

//Saudação
// Função para exibir a saudação com base na hora atual
function exibirSaudacao() {
    const saudacaoElemento = document.getElementById("saudacao"); // Seleciona o elemento HTML
    const horaAtual = new Date().getHours(); // Obtém a hora atual (0-23)

    let saudacaoTexto;

    // Define a saudação com base no horário
    if (horaAtual >= 0 && horaAtual < 12) {
        saudacaoTexto = "Bom dia!";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacaoTexto = "Boa tarde!";
    } else {
        saudacaoTexto = "Boa noite!";
    }

    // Atualiza o texto do elemento com a saudação
    saudacaoElemento.textContent = saudacaoTexto;
}

// Executa a função ao carregar a página
window.onload = exibirSaudacao;
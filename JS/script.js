// Carrega o conteúdo do cabeçalho
fetch("header.html")
    .then(response => response.text())  // Pega o conteúdo do arquivo header.html
    .then(data => {
        // Insere o conteúdo carregado no lugar do "header-placeholder"
        document.getElementById("header-placeholder").innerHTML = data;
        
        // Preenche dinamicamente a saudação, caso precise
        document.getElementById("saudacao").textContent = "Bem-vindo, Usuário!";
    })
    .catch(error => {
        // Em caso de erro ao carregar o cabeçalho
        console.error("Erro ao carregar o cabeçalho:", error);
    });
 // Função de login (simples, apenas para exemplo)
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
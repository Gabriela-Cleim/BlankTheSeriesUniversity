

  function toggleVisibility() {
    // Aqui você pode adicionar o código para a ação desejada quando o botão de login é clicado
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    

    // Exemplo de ação: verificar as credenciais
    if (username != "" && password != "" ) {
      
    // Esconder o botão de login
    var loginButton = document.getElementById("login-btn");
    loginButton.style.display = "none";
    // Esconder os campos de entrada de texto
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var forgotPassword = document.getElementById("forgot-password");
    var selectLang = document.getElementById("selectLan");
    var singIn = document.getElementById("titleSing");
    var title = document.getElementById("titlepassed");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    forgotPassword.style.display = "none";
    selectLang.style.display = "none";
    singIn.style.display = "none";


    var imageContainer = document.getElementById("image-container");
        imageContainer.style.display = "block";
        title.style.display = "block";

    } else {
      alert("Credenciais inválidas. Por favor, tente novamente.");
    }
    
    // Função para mostrar a div com a imagem
    function showImage() {
        
    }

}

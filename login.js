function logar(){
    var login = document.getElementById("login");
    var senha = document.getElementById("senha");

      if(login.value == "beatriz" && senha.value == "1234"){
            window.open("file:///C:/Users/Cliente/Documents/meusProjetos/tela_home.html");
            alert("login correto!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      }else{
            alert("usuario e senha incorretos");
      }
  }
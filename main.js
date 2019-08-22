// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
    
    

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function() {
    // A propriedade "value" contém o valor atual de um input ou textarea
    const nameValue = nameInput.value;
    const campoEmail = emailInput.value;
    const campoMenssage = messageInput.value;

    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    const nameLength = nameValue.length;

    if(nameValue == "" ){
      alert("Campo Nome Vazio, digite Seu Nome");
     
    }
    if(campoEmail == "" ){
      alert("Campo Email Vazio, Digite seu email");
      
    }
    if(campoEmail.indexOf('@') == -1 || campoEmail.indexOf('.') == -1 ){
      alert("Insira um Email valido");
    }
    if(campoMenssage == ""){
      alert("Campo Message Vazio, gostariamos de ouvir Oque Você tem A Dizer!");
      
    }
    else{
      window.alert(`Formulario enviado com Sucesso!`);
    }
    // "window" é um objeto global que representa a janela (ou aba) do
    // navegador que está executando o código do seu site. O método
    // "alert" simplesmente mostra um aviso para o usuário contendo a
    // mensagem provida.


    // Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });
})();

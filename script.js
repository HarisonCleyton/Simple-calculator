const display = document.getElementById('display'); //puxa o "display" pelo ID. ao colocar ".value" puxa o valor.

//Pega a class de um elemento do htmll.
const common_button = document.querySelectorAll('.common_button');
const button_operation = document.querySelectorAll('.button_operation');



//acessa todos os botões da classe button_number e os chama de button.
//depois adiciona um evento onclick para cada um. Cria uma function.
common_button.forEach(button => {
  button.addEventListener('click', function() {
    //pega o valor do display e adiciona o valor do botão.
    //button.textContent puxa o valor do botão.

    //classList retorna todas as listas do botão.

    if (button.classList.contains('button_operation') && display.value == '') return;

    var allow = true;

    if (button.classList.contains('button_operation')) {
      button_operation.forEach(operation => {
        if (display.value.endsWith(operation.textContent.toString())) {
          allow = false;
        }

      })
    }

    //se o allow estiver falso ou seja não pode ser digitado ele cancela.
    if (!allow) {
      return;
    }

    if (button.classList.contains('button_clear')) {
      display.value = '';
      return;
    }

    if (button.classList.contains('button_result')) {
      calculateNumbers();
      return;
    }

    display.value = display.value + button.textContent;

  });
})

//document.addEventListener adiciona um evento. 'keydown' tipo do evento. evnt.key pega a tecla.
document.addEventListener('keydown', function(evnt) {

  //usa o switch ora verificar caso seja algum dos numeros adiciona-o.4
  switch (evnt.key) {
    case '1':
      display.value = display.value + evnt.key;
      break;
    case '2':
      display.value = display.value + evnt.key;
      break;
    case '3':
      display.value = display.value + evnt.key;
      break;
    case '4':
      display.value = display.value + evnt.key;
      break;
    case '5':
      display.value = display.value + evnt.key;
      break;
    case '6':
      display.value = display.value + evnt.key;
      break;
    case '7':
      display.value = display.value + evnt.key;
      break;
    case '8':
      display.value = display.value + evnt.key;
      break;
    case '9':
      display.value = display.value + evnt.key;
      break;
    case '0':
      display.value = display.value + evnt.key;
      break;
    case '.':
      display.value = display.value + evnt.key;
      break;
    case ',':
      display.value = display.value + evnt.key;
      break;
    case 'C':
      display.value = '';
      break;
    case 'c':
      display.value = '';
      break;

    default:

      break;
  }

  //console.log(evnt.key)

 /* if (evnt.key == 'Enter') {
    calculateNumbers();
    return;
  }*/

  //caso a key seja Backspace ele apaga.
  if (evnt.key == 'Backspace') {
    //pega o ultimo caractere e remove-o. 
    display.value = display.value.substring(0, display.value.length - 1);
  }
});

//Utilizando a biblioteca math.js (https://mathjs.org/)
function calculateNumbers() {

  if (display.value == '' || display.value == undefined || display.value == null) return;
  
  try {
    //math.evaluate calcula o display.
    display.value = math.evaluate(display.value.replace('x', '*').replace('÷', '/'));
  } catch (error) {
    //caso ocorra o erro.
    alert('Calculation with syntax error');
    console.error("Erro ao avaliar a expressão com math.js:", error);
    // Normalmente sintaxe errada.
  }
}

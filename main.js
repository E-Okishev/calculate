import { numberOne, numberTwo, action, equally, answer, form, errorDiv } from "./modules/const.js";

function calculate(numOne, action, numTwo) {
  if (action === 'plus') {
    answer.value = Number(numOne) + Number(numTwo);
  }
  if (action === 'minus') {
    answer.value = Number(numOne) - Number(numTwo);
  }
  if (action === 'multiplication') {
    answer.value = Number(numOne) * Number(numTwo);
  }
  if (action === 'division') {
    answer.value = Number(numOne) / Number(numTwo);
  }
}

equally.addEventListener('click', function () {
  const newDiv = document.createElement('div');
  if (numberOne.value.length > 0 && numberTwo.value.length > 0) {
    calculate(numberOne.value, action.value, numberTwo.value)

    errorDiv.remove()

    newDiv.classList.add('new_div')
    newDiv.textContent = answer.value;
    newDiv.style.cursor = 'pointer'
    form.appendChild(newDiv);
  } else {
      errorDiv.classList.add('error_div');
      errorDiv.style.color = 'red';
      errorDiv.textContent = 'Заполните оба числа'
      form.appendChild(errorDiv)
    }
})

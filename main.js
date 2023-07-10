import { numberOne, numberTwo, action, equally, answer, form, errorDiv } from "./modules/const.js";
import { calculate } from "./modules/calc.js";

equally.addEventListener('click', function () {
  const newDiv = document.createElement('div');
  if (numberOne.value.length > 0 && numberTwo.value.length > 0) {
    calculate(numberOne.value, action.value, numberTwo.value);

    errorDiv.remove()

    newDiv.classList.add('new_div')
    newDiv.textContent = answer.value;
    newDiv.style.cursor = 'pointer'
    form.appendChild(newDiv);

    newDiv.addEventListener('click', function () {
      newDiv.remove();
    })
  } else {
      errorDiv.classList.add('error_div');
      errorDiv.style.color = 'red';
      errorDiv.textContent = 'Заполните оба числа'
      form.appendChild(errorDiv)
    }
})

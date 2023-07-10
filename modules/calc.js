import { answer } from "./const.js";

export function calculate(numOne, action, numTwo) {
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
  return answer.value
}
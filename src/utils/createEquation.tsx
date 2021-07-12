import { EquationObject, OperationTypes } from '../types';
import { createRandomNumber } from './createRandomNumber';

export const createEquationArray = (): EquationObject => {
  const operationsArray: OperationTypes = ['plus', 'minus', 'multiplication', 'division'];
  const firstNumber = createRandomNumber(0, 100);
  const secondNumber = createRandomNumber(0, 100);

  const operation = operationsArray[createRandomNumber(4)];

  let equationResult;
  let equation;

  switch(operation) {
    case 'division': {
      equationResult = Number((firstNumber / secondNumber).toFixed(2));
      equation = `${firstNumber} / ${secondNumber} = `;
      break;
    }

    case 'multiplication': {
      equationResult = firstNumber * secondNumber;
      equation = `${firstNumber} * ${secondNumber} = `;
      break;
    }

    case 'plus': {
      equationResult = firstNumber + secondNumber;
      equation = `${firstNumber} + ${secondNumber} = `;
      break;
    }

    default: {
      equationResult = firstNumber - secondNumber;
      equation = `${firstNumber} - ${secondNumber} = `;
      break;
    }
  }

  return {equation, equationResult, evaluated: false};
}
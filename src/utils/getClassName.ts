import { EquationObject } from "../types";

export const getClassName = (baseClass: string, equation: EquationObject): string => {
  return equation.equationResult === parseFloat(equation.userAnswer!) ? baseClass += ' right' : baseClass += ' wrong'; 
}

// let cls = 'equation-result';
//               if (showResult) {
//                 equation.equationResult === parseFloat(equation.userAnswer!) ? cls += ' right' : cls += ' wrong';
//               }
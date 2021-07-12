export type OperationTypes = ['plus', 'minus', 'multiplication', 'division'];

export interface EquationObject  {
  equationResult: number,
  equation: string,
  evaluated: boolean,
  userAnswer?: string
}

export type EquationsArray = EquationObject[];
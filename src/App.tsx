import React from 'react';
import { ResultBlock } from './components/ResultBlock';

import { EquationsArray } from './types';

import { createEquationArray } from './utils/createEquation';
import { getClassName } from './utils/getClassName';

export const App: React.FC = () => {
  const [equationsArray, setEquatinosArray] = React.useState<EquationsArray>([]);
  const [userName, setUserName] = React.useState<string>('');
  const [isStart, setIsStart] = React.useState<boolean>(false);
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const [isAllAnswered, setIsAllAnswered] = React.useState<boolean>(false);

  const handleEndGame = (): void => {
    if (!showResult) {
      setShowResult(true);
      return;
    }

    setEquatinosArray([]);
    setUserName('');
    setIsStart(false);
    setShowResult(false);
    setIsAllAnswered(false);
  }

  const handleStartGame = (): void => {
    setIsStart(true);
    const data = [];
    for(let i=0; i<10; i++) {
      data.push(createEquationArray());
    }
    setEquatinosArray(data);
  }

  const handleUserAnswer = (index: number, value: string): void => {
    if (showResult) return;

    const equations = [...equationsArray];
    equations[index].userAnswer = value;
    equations[index].evaluated = true;
    setEquatinosArray(equations);
  }

  React.useEffect(() => {
    const isEvaluated = equationsArray.every(item => item.evaluated);
    setIsAllAnswered(isEvaluated && equationsArray.length === 10);
  }, [equationsArray]);

  return (
    <div className="container">
      <div>
        <h2>{isStart ? `Игрок - ${userName}` : 'Введите имя'}</h2>
          <div className="form">
            {!isStart &&
              <div className="username">
                <input 
                  type="text" 
                  placeholder="Имя"
                  className='username-input' 
                  value={userName} 
                  onChange={event => setUserName(event.target.value)}
                />
                <button onClick={handleStartGame} className="btn" disabled={!userName.length || isStart}>Применить</button>
              </div>
            }
            <div className="equations-block">
              {isStart && 
                <>
                  <h4>Правила</h4>
                  <ol>
                    <li>Вписываем значения в поля инпутов</li>
                    <li>Дробные значения округляем до второго знака после запятой</li>
                    <li>Проверям ответы после заполнения всех полей</li>
                    <li>Получаем результат</li>
                  </ol>
                </>
              }
              <ul>
                {equationsArray.map((equation, index) => {
                  let cls = 'equation-result';
                  if (showResult) {
                    cls = getClassName(cls, equation);
                  }
                  return (
                    <li key={index}>
                      <div className="equation">{equation.equation}</div>
                      <input value={equation.userAnswer || ''} onChange={e => handleUserAnswer(index, e.target.value)} type="number" className={cls}/>
                    </li>
                  )
                })}
              </ul>
            </div>
            {isStart && <button disabled={!isAllAnswered} onClick={handleEndGame} className="complete btn">{showResult ?  'Заново' : 'Далее'}</button>}
          </div>
      </div>
      {showResult && <ResultBlock data={equationsArray}/>}
    </div>
  );
}
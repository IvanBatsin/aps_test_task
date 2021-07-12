import React from 'react';
import { EquationsArray } from '../types';
import { Table } from './Table';

interface ResultBlockProps {
  data: EquationsArray
}

export const ResultBlock: React.FC<ResultBlockProps> = ({data}) => {
  const [rightAnswers, setRightAnswers] = React.useState<number>(0);

  React.useEffect(() => {
    const count = data.filter(equation => equation.equationResult === parseFloat(equation.userAnswer!)).length;
    setRightAnswers(count);
  }, []);

  return (
    <div className="result">
      <h4>Молодец - {rightAnswers} из {data.length}</h4>
      <Table data={data}/>
    </div>
  )
}
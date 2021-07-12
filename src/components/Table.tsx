import React from 'react';
import { EquationsArray } from '../types';
import { getClassName } from '../utils/getClassName';

interface TableProps {
  data: EquationsArray,
}

export const Table: React.FC<TableProps> = ({data}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Выражение</th>
          <th>Ваш ответ</th>
          <th>Правильный ответ</th>
        </tr>
      </thead>
      <tbody>
        {data.map((equation, index) => {
          const cls = getClassName('', equation);
          return (
            <tr key={`${index}`}>
              <td>{equation.equation}</td>
              <td className={cls}>{equation.userAnswer}</td>
              <td>{equation.equationResult}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
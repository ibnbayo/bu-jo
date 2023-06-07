import React from 'react'
import { Goal } from '../model';
import OneGoal from './Goal';



interface Props{
    goals: Goal[];
    setGoals: React.Dispatch<React.SetStateAction<Goal[]>>
}

const TodoList:React.FC<Props> = ({goals,setGoals}:Props) => {

  return (
    <div className='todos'>
        {goals.map((goal) => (
            <OneGoal goal={goal} key={goal.id} goals={goals} setGoals={setGoals}/>
        ))}
    </div>
  )
}

export default TodoList
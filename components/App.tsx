import React from 'react';
import { useState } from 'react';
import Input from './Input'
import Goals from './Goals'
import { Goal } from '../model';
import styles from '../styles/Home.module.css'



const App: React.FC = () => {
  const [goal, setGoal] = useState<string>("");
  const [goals, setGoals] = useState<Goal[]>([]);
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (goal) {
      setGoals([...goals,{id: Date.now(), goal, isCompleted:false}])
      setGoal("")
    
    }
  };

  console.log(goals)

  return (
    <div className="App">
      <header className="heading">
       GOALS
      </header>
      <Input goal={goal} setGoal={setGoal} handleAdd={handleAdd}/>
      <Goals goals={goals} setGoals={setGoals}/>
    </div>
  );
}

export default App;
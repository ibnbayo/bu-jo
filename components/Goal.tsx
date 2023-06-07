import React, { useState } from 'react'
import { Goal} from '../model'

// import GoalList from './GoalList'

type Props= {
    goal: Goal,
    goals: Goal[],
    setGoals: React.Dispatch<React.SetStateAction<Goal[]>>
}
const Goal = ({goal, goals, setGoals}:Props) => {
  const handleDelete = (id:number) => {
    setGoals(goals.filter((goal) => goal.id !== id))

  }
  const handleDone = (id: number) => {
    setGoals(goals.map((goal)=>goal.id===id?{...goal,isCompleted :!goal.isCompleted}: goal)
    )
  }
  const handleUpdate = (e:React.FormEvent, id:number) => {
    e.preventDefault()
    setGoals(goals.map((goal) => (
      goal.id===id? {...goal,goal:updateGoal}: goal
      
    )))
    setUpdate(false)
  }
  const [update,setUpdate] = useState<boolean>(false)
  const [updateGoal,setUpdateGoal] = useState<string>(goal.goal)

  return (
    <form className='todos__single'
    onSubmit={(e) => handleUpdate(e,goal.id)}>
      {
        update? (
          <input value={updateGoal} onChange={(e) => setUpdateGoal(e.target.value)}
          className="todos__single--text"/>

        ):(
            goal.isCompleted? (
              <s className='todos__single--text'>{goal.goal}</s>
    
            ):(
              <span className='todos__single--text'>{goal.goal}</span>
    
            )

        )
      }
      
        
        <div>
            <span className='icon' onClick={() => {
              if (!update && !goal.isCompleted){
                setUpdate(!update)
              }
            }}>
                Edit
            </span>
            <span className='icon' onClick={()=>handleDelete(goal.id)}>
                Del
            </span>
            <span className='icon' onClick={()=>handleDone(goal.id)}>
                Done
            </span>
        </div>
    </form>
  )
}

export default Goal
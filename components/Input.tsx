import React from 'react'


interface Props{
  goal: string,
  setGoal: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent) => void;
}


const InputField = ({goal, setGoal, handleAdd}: Props) => {
  return (
    <div>
      <form className='input' onSubmit={handleAdd}>
        <input type='input'
        value = {goal}
        onChange = {
          (e)=>setGoal(e.target.value)
        } placeholder='Enter a task' className="input__box" />
        <button className='input_submit' type="submit">
          Enter
        </button>
      </form>
    </div>
  )
}

export default InputField
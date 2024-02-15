import React from 'react'
import Button, { SelectButton } from './Button'
import '../styles/index.css'


const AppHeader = () => {
  return (
    <div className='appHeader'>
      
      <Button variant="primary">Add Task</Button>
      <SelectButton id="status">
        <option value="all"> ALL</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </SelectButton>
    </div>
  )
}

export default AppHeader

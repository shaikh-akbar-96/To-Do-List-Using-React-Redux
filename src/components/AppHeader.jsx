import React, { useState } from 'react'
import Button, { SelectButton } from './Button'
import '../styles/index.css'
import ToDoModal from './ToDoModal'


const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='appHeader'>
      
      <Button variant="primary" onClick={()=>setModalOpen(true)} >Add Task</Button>
      <SelectButton id="status">
        <option value="all"> ALL</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </SelectButton>
      <ToDoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}

export default AppHeader

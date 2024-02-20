import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import "../styles/index.css";
import ToDoModal from "./ToDoModal";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/todoSlice";

const AppHeader = () => {

  const dispatch = useDispatch();

  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const [modalOpen, setModalOpen] = useState(false);

  const updateFilter = (e) => {

    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className="appHeader">
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
        <option value="all"> ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <ToDoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default AppHeader;

import React from "react";
import "../styles/index.css";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
const ToDoModal = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="closeButton">
          <MdOutlineClose />
        </div>
        <form className="form">
          <h1 className="formTitle">Add Task</h1>
          <label htmlFor="title">
            Title
            <input type="text" id="title" />
          </label>
          <label htmlFor="status">
            Status
            <select type="text" id="status">
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </label>
          <div className="buttonContainer">
            <Button type="submit" variant="primary">
              Add Task
            </Button>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ToDoModal;

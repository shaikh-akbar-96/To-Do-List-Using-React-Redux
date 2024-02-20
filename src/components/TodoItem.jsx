import React, { useEffect, useState } from "react";
import "../styles/index.css";
import { getClasses } from "./../utils/getClasses";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../slices/todoSlice";
import toast from "react-hot-toast";
import ToDoModal from "./ToDoModal";
import CheckButton from "./CheckButton";


const child = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo Deleted successfully");
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? "incomplete" : "complete",
      })
    );
  };

  return (
    <>
      <div className="item">
        <div className="todoDetails">
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className="texts">
            <p
              className={getClasses([
                "todoText",
                todo.status === "complete" && "todoText--completed",
              ])}
            >
              {todo.title}
            </p>
            <p className="time">
              {" "}
              {format(new Date(todo.time), "p, mm/dd/yyyy")}{" "}
            </p>
          </div>
        </div>
        <div className="todoActions">
          <div
            className="icon"
            onClick={handleDelete}
            onKeyDown={handleDelete}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </div>
          <div
            className="icon"
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            tabIndex={0}
            role="button"
          >
            <MdEdit />
          </div>
        </div>
      </div>
      <ToDoModal
        type="update"
        todo={todo}
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
      />
    </>
  );
};

export default TodoItem;

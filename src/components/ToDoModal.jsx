import React, { useEffect, useState } from "react";
import "../styles/index.css";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../slices/todoSlice";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

const dropIn = {
  hidden: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "string",
      damping: 25,
      stiffness: 500,
    },
    exit: {
      transform: "scale(0.1)",
      opacity: 0,
    },
  },
};

const ToDoModal = ({ type, modalOpen, setModalOpen, todo }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      toast.error("Please enter a title.");
    }
    if (title && status) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("Task Added Successfully");
      }
      if (type === "update") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(
            updateTodo({
              ...todo,
              title,
              status,
            })
          );
        } else {
          toast.error("No Changes Made");
          return;
        }
      }
      setModalOpen(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="container"
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="closeButton"
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
                tabIndex={0}
                role="button"
                initial={{ top: 40, opacity: 0 }}
                animate={{ top: -10, opacity: 1 }}
                exit={{ top: 40, opacity: 0 }}
              >
                <MdOutlineClose />
              </motion.div>
              <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <h1 className="formTitle">
                  {type === "update" ? "Update" : "Add"} Task
                </h1>
                <label htmlFor="title">
                  Title
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                <label htmlFor="status">
                  Status
                  <select
                    type="text"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Complete</option>
                  </select>
                </label>
                <div className="buttonContainer">
                  <Button type="submit" variant="primary">
                    {type === "update" ? "Update" : "Add"} Task
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setModalOpen(false)}
                    onKeyDown={() => setModalOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ToDoModal;

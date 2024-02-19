import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import '../styles/index.css'

const AppContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  return (
    <div className="content__wrapper">
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : "No todo found"}
    </div>
  );
};

export default AppContent;

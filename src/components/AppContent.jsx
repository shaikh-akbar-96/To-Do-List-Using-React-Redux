import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "../styles/index.css";

const AppContent = () => {

  const todoList = useSelector((state) => state.todo.todoList);

  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const sortedTodoList = [...todoList];

  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  console.log("Sorted Todo List:", sortedTodoList);


  const filteredTodoList = sortedTodoList.filter((item) => {
    
    if (filterStatus === "all") {
      return true;
    }
    console.log("Item Status:", item.status);
    console.log("Filter Status:", filterStatus);
    console.log(item.status === filterStatus,"aaaaa");
    return item.status === filterStatus;
  });

  console.log("Filtered Todo List:", filteredTodoList);

  return (
    <div className="content__wrapper">
      {filteredTodoList && filteredTodoList.length > 0
        ? filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : "No todo found"}
    </div>
  );
};

export default AppContent;

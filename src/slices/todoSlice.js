import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const localTodoList = localStorage.getItem("todoList");
  if (localTodoList) {
    return JSON.parse(localTodoList);
  } else {
    localStorage.setItem("todoList", JSON.stringify([]));
    return [];
  }
};

const initialValue = {
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({ ...action.payload });

        localStorage.setItem("todoList", JSON.stringify(todoListArr));
      }
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;

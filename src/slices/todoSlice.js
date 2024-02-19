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
      } else {
        localStorage.setItem(
          "todoList",
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
    deleteTodo: (state, action) => {
      const todoList = localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });
        localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    updateTodo: (state, action) => {
      const todoList = localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.status = action.payload.status;
          }
        });
        localStorage.setItem("todoList", JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
  },
});

export const { addTodo, deleteTodo,updateTodo } = todoSlice.actions;
export default todoSlice.reducer;

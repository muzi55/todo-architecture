import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <>
      <h1>투두앱</h1>

      <TodoForm />
      <Todo />
    </>
  );
}

export default App;

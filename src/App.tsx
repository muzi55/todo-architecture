import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { ITodo } from "./libs/type";

function App() {
  const [todo, setTodo] = useState<ITodo[]>([]);
  return (
    <>
      <h1>투두앱</h1>

      <TodoForm todo={todo} setTodo={setTodo} />
      <Todo />
    </>
  );
}

export default App;

import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { ITodo } from "./libs/type";
import TodoSearch from "./components/TodoSearch";
import TodoSort from "./components/TodoSort";

const initialTodo: ITodo[] = [
  {
    id: new Date(),
    title: "투두앱 만들기",
    content: "리액트와 타입스크립트로 투두앱 만들기",
  },
];

function App() {
  const [todo, setTodo] = useState<ITodo[]>(initialTodo);
  return (
    <>
      <h1>투두앱</h1>

      <TodoForm todo={todo} setTodo={setTodo} />
      <TodoSearch todo={todo} setTodo={setTodo} />
      <TodoSort todo={todo} setTodo={setTodo} />
      <Todo todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;

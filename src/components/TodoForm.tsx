import React, { useEffect, useState } from "react";
import { ITodo, ITodoProps } from "../libs/type";
import { TodoController } from "../libs/TodoController";

function TodoForm({ todo, setTodo }: ITodoProps) {
  const [todoForm, setTodoForm] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodoForm({
      ...todoForm,
      [name]: value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: ITodo = {
      id: new Date(),
      ...todoForm,
    };

    const nextTodo: ITodo[] = TodoController(todo).add(newTodo).get();
    setTodo(nextTodo);
    resetState();
  };

  const resetState = () => {
    setTodoForm({
      title: "",
      content: "",
    });
  };

  useEffect(() => {
    return () => {
      resetState();
    };
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" value={todoForm.title} onChange={handleChange} />
      <input type="text" name="content" value={todoForm.content} onChange={handleChange} />
      <button type="submit" disabled={todoForm.content === "" || todoForm.title === ""}>
        추가
      </button>
    </form>
  );
}

export default TodoForm;

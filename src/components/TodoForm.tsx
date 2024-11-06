import React, { useEffect, useState } from "react";
import { ITodo } from "../libs/type";

interface ITodoForm {
  todo: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

function TodoForm({ todo, setTodo }: ITodoForm) {
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
    addState();
    resetState();
  };

  const addState = () => {
    const newTodo: ITodo = {
      id: new Date(),
      ...todoForm,
    };
    setTodo([...todo, newTodo]);
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
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;

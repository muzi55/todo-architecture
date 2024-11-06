import { ITodo } from "./type";

export const TodoController = (todos: ITodo[]) => ({
  add: (todo: ITodo) => {
    return TodoController([...todos, todo]);
  },
  delete: (id: Date) => {
    return TodoController(todos.filter((el) => el.id !== id));
  },
  get: () => todos,
});

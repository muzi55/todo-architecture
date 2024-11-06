import { ITodo } from "./type";

export const TodoController = (todos: ITodo[]) => ({
  add: (todo: ITodo) => {
    return TodoController([...todos, todo]);
  },
  get: () => todos,
});

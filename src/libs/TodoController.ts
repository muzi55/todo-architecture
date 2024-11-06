import { ITodo } from "./type";

export const TodoController = (todos: ITodo[]) => ({
  add: (todo: ITodo) => {
    return TodoController([...todos, todo]);
  },
  delete: (id: Date) => {
    return TodoController(todos.filter((el) => el.id !== id));
  },
  search: (keyword: string) => {
    const filterData = keyword ? todos.filter((el) => el.title.includes(keyword) || el.content.includes(keyword)) : [];
    return TodoController(filterData);
  },
  get: () => todos,
});

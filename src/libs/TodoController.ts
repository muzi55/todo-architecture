import { ITodo, SortOrder } from "./type";

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
  sort: (order: SortOrder) => {
    const sortedTodos = todos.toSorted((a, b) => {
      if (order === "newest") {
        return b.id.getTime() - a.id.getTime();
      }
      if (order === "oldest") {
        return a.id.getTime() - b.id.getTime();
      }

      throw new Error("invalid order");
    });
    return TodoController(sortedTodos);
  },
  get: () => todos,
});

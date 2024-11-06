import { ITodoProps, SortOrder } from "../libs/type";
import { TodoController } from "../libs/TodoController";

function TodoSort({ todo, setTodo }: ITodoProps) {
  const handleSortButton = (sortOrder: SortOrder) => {
    if (sortOrder === "newest") {
      const sortedTodo = TodoController(todo).sort("newest").get();
      setTodo(sortedTodo);
    }

    if (sortOrder === "oldest") {
      const sortedTodo = TodoController(todo).sort("oldest").get();
      setTodo(sortedTodo);
    }
  };

  return (
    <div>
      <h2>Sort Buttons</h2>
      <button onClick={() => handleSortButton("newest")}>Newest</button>
      <button onClick={() => handleSortButton("oldest")}>Oldest</button>
    </div>
  );
}

export default TodoSort;

import { TodoController } from "../libs/TodoController";
import { ITodoProps } from "../libs/type";

function Todo({ todo, setTodo }: ITodoProps) {
  const deleteTodo = (id: Date) => {
    const nextTodo = TodoController(todo).delete(id).get();
    setTodo(nextTodo);
  };
  return (
    <ul>
      {TodoController(todo)
        .get()
        .map((el) => (
          <li key={el.id.toString()}>
            <div style={{ display: "flex" }}>
              <h2 style={{ width: "100%" }}>{el.title}</h2>
              <button onClick={() => deleteTodo(el.id)}>X</button>
            </div>
            <p>{el.content}</p>
          </li>
        ))}
    </ul>
  );
}

export default Todo;

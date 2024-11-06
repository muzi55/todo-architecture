import { TodoController } from "../libs/TodoController";
import { ITodoProps } from "../libs/type";

function Todo({ todo, setTodo }: ITodoProps) {
  return (
    <ul>
      {TodoController(todo)
        .get()
        .map((el) => (
          <li key={el.id.toString()}>
            <div style={{ display: "flex" }}>
              <h2 style={{ width: "100%" }}>{el.title}</h2>
              <button>X</button>
            </div>
            <p>{el.content}</p>
          </li>
        ))}
    </ul>
  );
}

export default Todo;

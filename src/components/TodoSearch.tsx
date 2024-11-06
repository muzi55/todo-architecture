import { useRef, useState } from "react";
import { ITodoProps } from "../libs/type";

function TodoSearch({ todo }: ITodoProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState(todo);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const keyword = inputRef.current?.value || "";

    setSearchResults(keyword ? todo.filter((el) => el.title.includes(keyword) || el.content.includes(keyword)) : []);
  };

  return (
    <div>
      <h2>투두 검색</h2>

      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="text" />
        <button>검색</button>
      </form>

      <ul>
        {searchResults.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoSearch;

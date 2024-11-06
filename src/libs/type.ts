export interface ITodo {
  id: Date;
  title: string;
  content: string;
}

export interface ITodoProps {
  todo: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export type SortOrder = "newest" | "oldest";

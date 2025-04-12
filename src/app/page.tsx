import { useState } from "react";

export default function Home(): JSX.Element {
  const [todos, setTodos] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [newTodoText, setNewTodoText] = useState("");
  let nextId = 1;

  const handleAddTodo = (): void => {
    if (newTodoText.trim() !== "") {
      setTodos([
        ...todos,
        { id: nextId++, text: newTodoText, completed: false },
      ]);
      setNewTodoText("");
    }
  };

  const handleToggleComplete = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a todo"
          className="border border-gray-300 p-2 mr-2 flex-grow"
        />
        <button onClick={handleAddTodo} className="bg-blue-500 text-white p-2">
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <input type="checkbox" checked={todo.completed} onChange={() => handleToggleComplete(todo.id)} className="mr-2" />
            <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

import { useEffect, useState } from 'react';
import { NewTodoForm } from './components/NewTodoForm';
import './index.css';
import { TodoList } from './components/TodoList';
import { ITodo } from './model/ITodo.interface';

export default function App() {
  const ITEMS_KEY_LOCAL_STORAGE = 'ITEMS';

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem(ITEMS_KEY_LOCAL_STORAGE);
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem(ITEMS_KEY_LOCAL_STORAGE, JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(title: string) {
    setTodos((currentTodos: ITodo[]) => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false }];
    });
  }

  function handleToggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos: ITodo[]) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function handleDeleteTodo(id: string) {
    setTodos((currentTodos: ITodo[]) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={handleSubmit} />
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />
    </>
  );
}

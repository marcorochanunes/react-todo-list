import { ITodo } from '../model/ITodo.interface';

interface Props {
  todo: ITodo;
  onToggleTodo: (id: string, checked: boolean) => void;
  onDeleteTodo: (id: string) => void;
}

export function TodoItem({ todo, onToggleTodo, onDeleteTodo }: Props) {
  return (
    <li>
      <label>
        <input type='checkbox' checked={todo.completed} onChange={(e) => onToggleTodo(todo.id, e.target.checked)} />
        {todo.title}
      </label>
      <button onClick={() => onDeleteTodo(todo.id)} className='btn btn-danger'>
        Delete
      </button>
    </li>
  );
}

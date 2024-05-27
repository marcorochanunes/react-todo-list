import { ITodo } from '../model/ITodo.interface';
import { TodoItem } from './TodoItem';

interface Props {
  todos: ITodo[];
  onToggleTodo: (id: string, checked: boolean) => void;
  onDeleteTodo: (id: string) => void;
}

export function TodoList({ todos, onToggleTodo, onDeleteTodo }: Props) {
  return (
    <ul className='list'>
      {todos.length === 0 && 'No Todos'}
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />;
      })}
    </ul>
  );
}

import { FormEvent, useState } from 'react';

interface Props {
  onSubmit: (item: string) => void;
}

export function NewTodoForm({ onSubmit }: Props) {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newItem === '') return;

    onSubmit(newItem);

    setNewItem('');
  }

  return (
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input value={newItem} className='form-control' onChange={(e) => setNewItem(e.target.value)} type='text' id='item' />
      </div>
      <button className="btn btn-primary mt-2">Add</button>
    </form>
  );
}

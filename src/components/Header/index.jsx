import styles from './header.module.css';
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle('');

    if (!title) {
      alert("Inputga malumot kiritmadingiz");
    }
    if (title <= 3) {
      alert("Inputga malumot kiritmadingiz");
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }


  
  

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Enter todo here" maxLength={65} type="text" onChange={onChangeTitle} value={title} />
        <button>Submit</button>
      </form>
    </header>
  )
}
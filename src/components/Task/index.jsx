import styles from './task.module.css';
import { TbTrash } from 'react-icons/tb';

export function Task({ task, onDelete}) {
  return (
    <div className={styles.task}>
     <input type="checkbox" />
      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  )
}
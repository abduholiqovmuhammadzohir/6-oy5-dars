import {Task} from "../Task";
import styles from './tasks.module.css';

export function Tasks({ tasks, onDelete, onComplete }) {
  return (
    <section className={styles.tasks}>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}
      </div>
    </section>
  )
}
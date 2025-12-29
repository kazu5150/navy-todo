import styles from './TaskList.module.css';

export default function TaskList({ tasks, users, onToggleTask }) {
    if (tasks.length === 0) {
        return (
            <div className={styles.emptyState}>
                <p>No tasks found in this project.</p>
            </div>
        );
    }

    const getUser = (id) => users.find(u => u.id === id) || { name: 'Unknown', avatar: '?' };

    return (
        <ul className={styles.taskList}>
            {tasks.map(task => {
                const assignee = getUser(task.assigneeId);
                return (
                    <li key={task.id} className={styles.taskItem}>
                        <input
                            type="checkbox"
                            className={styles.checkbox}
                            checked={task.completed}
                            onChange={() => onToggleTask(task.id)}
                        />
                        <div className={styles.content}>
                            <span className={`${styles.title} ${task.completed ? styles.completed : ''}`}>
                                {task.title}
                            </span>
                        </div>

                        <div className={styles.assignee} title={`Assigned to ${assignee.name}`}>
                            <span className={styles.avatar}>{assignee.avatar}</span>
                            {assignee.name}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

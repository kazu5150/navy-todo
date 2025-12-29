import { useState } from 'react';
import styles from './AddTaskModal.module.css';

export default function AddTaskModal({ isOpen, onClose, onAdd, projects, users }) {
    const [title, setTitle] = useState('');
    const [projectId, setProjectId] = useState(projects[0]?.id || '');
    const [assigneeId, setAssigneeId] = useState(users[0]?.id || '');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        onAdd({
            title,
            projectId,
            assigneeId,
            completed: false,
        });

        // Reset and close
        setTitle('');
        onClose();
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <h2 className={styles.title}>New Task</h2>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>What needs to be done?</label>
                        <input
                            className={styles.input}
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="e.g. Design review"
                            autoFocus
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Project</label>
                        <select
                            className={styles.select}
                            value={projectId}
                            onChange={e => setProjectId(e.target.value)}
                        >
                            {projects.map(p => (
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Assign to</label>
                        <select
                            className={styles.select}
                            value={assigneeId}
                            onChange={e => setAssigneeId(e.target.value)}
                        >
                            {users.map(u => (
                                <option key={u.id} value={u.id}>{u.avatar} {u.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.actions}>
                        <button type="button" className={`${styles.button} ${styles.cancelBtn}`} onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className={`${styles.button} ${styles.submitBtn}`}>
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

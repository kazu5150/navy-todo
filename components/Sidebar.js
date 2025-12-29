import styles from './Sidebar.module.css';

export default function Sidebar({ projects, selectedProjectId, onSelectProject }) {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>Navy Task</div>

            <div className={styles.sectionTitle}>Projects</div>
            <ul className={styles.projectList}>
                <li
                    className={`${styles.projectItem} ${!selectedProjectId ? styles.active : ''}`}
                    onClick={() => onSelectProject(null)}
                >
                    <span className={styles.colorDot} style={{ backgroundColor: '#fff' }}></span>
                    All Tasks
                </li>
                {projects.map(project => (
                    <li
                        key={project.id}
                        className={`${styles.projectItem} ${selectedProjectId === project.id ? styles.active : ''}`}
                        onClick={() => onSelectProject(project.id)}
                    >
                        <span className={styles.colorDot} style={{ backgroundColor: project.color }}></span>
                        {project.name}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

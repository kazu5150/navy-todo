'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Sidebar from '@/components/Sidebar';
import TaskList from '@/components/TaskList';
import AddTaskModal from '@/components/AddTaskModal';
import { initialTasks, projects, users } from '@/lib/data';

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTasks = selectedProjectId
    ? tasks.filter(t => t.projectId === selectedProjectId)
    : tasks;

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map(t =>
      t.id === taskId ? { ...t, completed: !t.completed } : t
    ));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now().toString() }]);
  };

  const selectedProject = projects.find(p => p.id === selectedProjectId);
  const pageTitle = selectedProject ? selectedProject.name : "All Tasks";

  return (
    <div className={styles.container}>
      <Sidebar
        projects={projects}
        selectedProjectId={selectedProjectId}
        onSelectProject={setSelectedProjectId}
      />
      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>{pageTitle}</h1>
            <p className={styles.subtitle}>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <button
            className={styles.addTaskBtn}
            onClick={() => setIsModalOpen(true)}
          >
            + Add Task
          </button>
        </header>

        <TaskList
          tasks={filteredTasks}
          users={users}
          onToggleTask={handleToggleTask}
        />

        <AddTaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddTask}
          projects={projects}
          users={users}
        />
      </main>
    </div>
  );
}

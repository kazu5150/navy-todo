export const users = [
    { id: 'u1', name: 'You', avatar: '👤' },
    { id: 'u2', name: 'Alice', avatar: '👩' },
    { id: 'u3', name: 'Bob', avatar: '👨' },
];

export const projects = [
    { id: 'p1', name: 'Personal', color: '#38bdf8' },
    { id: 'p2', name: 'Work', color: '#a855f7' },
    { id: 'p3', name: 'Shopping', color: '#22c55e' },
];

export const initialTasks = [
    { id: 't1', title: 'Buy milk', projectId: 'p3', assigneeId: 'u1', completed: false },
    { id: 't2', title: 'Finish report', projectId: 'p2', assigneeId: 'u1', completed: true },
    { id: 't3', title: 'Review design', projectId: 'p2', assigneeId: 'u2', completed: false },
    { id: 't4', title: 'Gym', projectId: 'p1', assigneeId: 'u1', completed: false },
];

import Home from './Home.svelte';
import AddTodo from './AddTodo.svelte';
import ProjectDetail from './ProjectDetail.svelte';
import TodoDetail from './TodoDetail.svelte';
import AddProject from './AddProject.svelte';

const routes = {
    '/': Home,
    '/add-todo/:projectId': AddTodo,
    '/project': AddProject,
    '/project/:id': ProjectDetail,
    '/todo/:id': TodoDetail,
}

export default routes; 
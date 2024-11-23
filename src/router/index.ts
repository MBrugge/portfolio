import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
    { path: '/project/:id', name: 'Project', component: () => import('@/views/Projects.vue') },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

interface RouteMeta {
    title: string;
}

const routes: Array<RouteRecordRaw & { meta: RouteMeta }> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: { title: 'Home' }
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/views/Projects.vue'),
        meta: { title: 'Projects' }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
        meta: { title: 'Not Found' }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Navigation guard to update the document title
router.beforeEach((to, from, next) => {
    const title = to.meta.title as string | undefined;
    document.title = title || 'Default Title';
    next();
});

export default router;
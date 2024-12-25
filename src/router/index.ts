import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Maths from '../views/Maths.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'app',
			component: App,
			children: [
				{
					path: '/math',
					name: 'math',
					component: Maths,
				},
			],
		},
	],
});

export default router;

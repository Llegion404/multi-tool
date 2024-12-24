import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Home from '../views/Home.vue';
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
					path: '/',
					name: 'home',
					component: Home,
					children: [
						{
							path: '/math',
							name: 'math',
							component: Maths,
						},
					],
				},
			],
		},
	],
});

export default router;

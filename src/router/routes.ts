import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import FAQ from '../views/FAQ.vue'

const history = createWebHistory();
const routes = [
	{ path: "/", component: Home },
	{ path: "/login", component: Login },
	{ path: "/faq", component: FAQ },
];
const router = createRouter({ history, routes });

export default router;
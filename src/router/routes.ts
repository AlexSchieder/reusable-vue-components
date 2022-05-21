import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const history = createWebHistory();
const routes = [
	{ path: "/", component: Home },
	{ path: "/login", component: Login },
];
const router = createRouter({ history, routes });

export default router;
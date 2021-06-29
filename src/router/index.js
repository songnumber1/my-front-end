import Vue from 'vue';
import VueRouter from 'vue-router';

// import GridSystem from '../views/GridSystem.vue';
// import ButtonIcon from '../views/ButtonIcon.vue';
// import GridListPage from '../views/GridListPage.vue';
// import Login from '../views/Login.vue';
// import Tables from '../views/Tables.vue';
// import Forms from '../views/Forms.vue';
// import Buttons from '../views/Buttons.vue';
// import Icons from '../views/Icons.vue';
// import SignIn from '@/views/authentication/SignIn';
// import SignUp from '@/views/authentication/SignUp';
// import ProductList from '@/views/page/ProductList';
// import PageLayout from '@/layouts/page/Index';
// import AuthenticationLayout from '@/layouts/authentication/Index';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: () =>
			import(
				/* webpackChunkName: "layouts-default-index" */ '@/layouts/default/Index'
			),
		children: [
			{
				path: '/',
				name: 'Dashboard',
				component: () =>
					import(
						/* webpackChunkName: "views-dashboard" */ '../views/Dashboard.vue'
					)
			},
			{
				path: '/grid-system',
				name: 'GridSystem',
				component: () =>
					import(
						/* webpackChunkName: "views-grid-system" */ '../views/GridSystem.vue'
					)
			},
			{
				path: '/button-icon',
				name: 'ButtonIcon',
				component: () =>
					import(
						/* webpackChunkName: "views-button-icon" */ '../views/ButtonIcon.vue'
					)
			},
			{
				path: '/grid-list-page',
				name: 'GridListPage',
				component: () =>
					import(
						/* webpackChunkName: "views-gridlist-page" */ '../views/GridListPage.vue'
					)
			},
			{
				path: '/login',
				name: 'Login',
				component: () =>
					import(/* webpackChunkName: "views-login" */ '../views/Login.vue')
			},
			{
				path: '/tables',
				name: 'Tables',
				component: () =>
					import(/* webpackChunkName: "views-table" */ '../views/Tables.vue')
			},
			{
				path: '/forms',
				name: 'Forms',
				component: () =>
					import(/* webpackChunkName: "views-forms" */ '../views/Forms.vue')
			},
			{
				path: '/buttons',
				name: 'Buttons',
				component: () =>
					import(/* webpackChunkName: "views-buttons" */ '../views/Buttons.vue')
			},
			{
				path: '/icons',
				name: 'Icons',
				component: () =>
					import(/* webpackChunkName: "views-icons" */ '../views/Icons.vue')
			}
		]
	},
	{
		path: '/authentication',
		component: () =>
			import(
				/* webpackChunkName: "layout-authentication" */ '@/layouts/authentication/Index'
			),
		children: [
			{
				path: 'sign-in',
				name: 'SignIn',
				component: () =>
					import(
						/* webpackChunkName: "views-authentication" */ '@/views/authentication/SignIn'
					)
			},
			{
				path: 'sign-up',
				name: 'SignUp',
				component: () =>
					import(
						/* webpackChunkName: "views-authentication" */ '@/views/authentication/SignUp'
					)
			}
		]
	},
	{
		path: '/page',
		component: () =>
			/* webpackChunkName: "views-page" */ '@/layouts/page/Index',
		children: [
			{
				path: 'product-list',
				name: 'ProductList',
				component: () =>
					import(
						/* webpackChunkName: "views-product-list" */ '../views/page/ProductList'
					)
			}
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;

<template>
	<v-navigation-drawer
		v-bind="$attrs"
		app
		dark
		:src="require('@/assets/sidebar.jpg')"
	>
		<template v-slot:img="props">
			<v-img :gradient="gradient" v-bind="props"> </v-img>
		</template>

		<default-drawer-header />
		<v-divider />

		<default-list :items="items"></default-list>
	</v-navigation-drawer>
</template>
<script>
// import DrawerHeader from './DrawerHeader.vue';
// import DefaultList from './List.vue';
export default {
	name: 'DefaultDrawer',
	components: {
		DefaultDrawerHeader: () =>
			import(
				/* webpackChunkName: "default-drawer-header" */ './DrawerHeader.vue'
			),
		DefaultList: () =>
			import(/* webpackChunkName: "default-list" */ './List.vue')
		// DrawerHeader,
		// DefaultList
	},
	data() {
		return {
			gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
			items: [
				{ title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
				{ title: 'Spring', icon: 'mdi-view-dashboard', to: '/spring-jwttoken' },
				{
					title: 'Pages',
					icon: 'mdi-menu',
					items: [
						{
							title: 'Authentication',
							icon: 'mdi-login',
							items: [
								{
									title: 'SignIn',
									icon: 'mdi-login',
									to: '/authentication/sign-in'
								},
								{
									title: 'SignUp',
									icon: 'mdi-logout',
									to: '/authentication/sign-up'
								}
							]
						},
						{
							title: 'ProductList',
							icon: 'mdi-reproduction',
							to: '/page/product-list'
						}
					]
				},

				{ title: 'Grid System', icon: 'mdi-grid', to: '/grid-system' },
				{
					title: 'Button Icon',
					icon: 'mdi-alpha-b-circle',
					to: '/button-icon'
				},
				{
					title: 'Grid List Page',
					icon: 'mdi-grid-large',
					to: '/grid-list-page'
				},
				{ title: 'Login', icon: 'mdi-login-variant', to: '/login' },
				{ title: 'Tables', icon: 'mdi-table-settings', to: '/tables' },
				{ title: 'Forms', icon: 'mdi-form-select', to: '/forms' },
				{ title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons' },
				{ title: 'Icons', icon: 'mdi-emoticon-excited-outline', to: '/icons' },

				{ title: 'About', icon: 'mdi-help-box' }
			]
		};
	}
};
</script>
<style></style>

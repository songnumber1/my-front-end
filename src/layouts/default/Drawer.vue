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

		<v-list-item>
			<v-list-item-content>
				<v-list-item-title
					class="text-h6"
					v-text="this.$store.state.appNavTitle"
				>
				</v-list-item-title>

				<v-list-item-subtitle v-text="this.$store.state.appsubNavTitle">
				</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>

		<v-divider></v-divider>

		<v-list dense nav>
			<v-list-item
				v-for="item in items"
				:key="item.title"
				link
				:to="item.to"
				active-class="primary"
				class="py-1"
			>
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>
<script>
export default {
	name: 'DefaultDrawer',
	data() {
		return {
			gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
			items: [
				{ title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
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

				{ title: 'SignIn', icon: 'mdi-login', to: '/authentication/sign-in' },
				{ title: 'SignUp', icon: 'mdi-logout', to: '/authentication/sign-up' },
				{
					title: 'ProductList',
					icon: 'mdi-reproduction',
					to: '/page/product-list'
				},

				{ title: 'About', icon: 'mdi-help-box' }
			]
		};
	}
};
</script>
<style></style>

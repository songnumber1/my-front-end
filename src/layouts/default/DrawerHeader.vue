<template>
	<v-list-item>
		<v-list-item-avater>
			<v-container class="mr-3">
				<v-img :src="require('@/assets/logo.png')" width="35px"></v-img>
			</v-container>
		</v-list-item-avater>

		<v-list-item-content>
			<v-list-item-title class="text-h6" v-text="this.$store.state.appNavTitle">
			</v-list-item-title>

			<v-list-item-subtitle v-text="this.$store.state.appsubNavTitle">
			</v-list-item-subtitle>
		</v-list-item-content>
	</v-list-item>
</template>

<script>
export default {
	name: 'DefaultDrawerHeader'
};
</script>

<style></style>

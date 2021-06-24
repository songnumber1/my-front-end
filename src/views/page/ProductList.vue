<template>
	<v-contianer fluid>
		<v-row>
			<v-col v-for="i in 20" :key="i" cols="12" sm="6" md="4" lg="3">
				<product-item />
			</v-col>
		</v-row>
	</v-contianer>
</template>

<script>
import ProductItem from '@/components/product/ProductItem.vue';
export default {
	components: {
		ProductItem
	},
	created() {
		console.log('Parent created');
	}
};
</script>

<style></style>

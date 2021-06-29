<template>
	<v-container fluid>
		<v-card>
			<v-car-title>
				<p class="pa-3">Form Validateion</p>
			</v-car-title>

			<v-card-text>
				<validation-observer>
					<v-form>
						<validation-provider name="Name" rules="max:10" v-slot="{ errors }">
							<v-text-field
								label="Name"
								v-model="name"
								:counter="10"
								:error-messages="errors"
							>
							</v-text-field>
						</validation-provider>

						<validation-provider>
							<v-text-field label="PhoneNumber"> </v-text-field>
						</validation-provider>

						<validation-provider>
							<v-text-field label="E-Mail"> </v-text-field>
						</validation-provider>

						<validation-provider>
							<v-select label="Select" :items="items"> </v-select>
						</validation-provider>

						<validation-provider>
							<v-checkbox label="Checkbox" value="1"></v-checkbox>
						</validation-provider>

						<v-btn type="submit" class="mr-4" color="primary">submit</v-btn>
						<v-btn>clear</v-btn>
					</v-form>
				</validation-observer>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { max } from 'vee-validate/dist/rules';

// extend('max', (value, params) => {
// 	const limit = params[0];

// 	if (value && value.length > 20) {
// 		return `해당 필드는 ${limit}자를 초과할 수 없습니다.`;
// 	}
// 	return true;
// });

extend('max', {
	...max,
	message: '{_field_}필드는 {length}자를 초과할 수 없습니다.'
});
export default {
	name: 'Forms',
	components: {
		ValidationObserver,
		ValidationProvider
	},
	data() {
		return {
			name: null,
			items: [
				{ text: '아이템1', value: 1 },
				{ text: '아이템2', value: 2 },
				{ text: '아이템3', value: 3 }
			]
		};
	}
};
</script>

<style></style>

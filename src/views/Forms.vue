<template>
	<v-container fluid>
		<v-card>
			<v-car-title>
				<p class="pa-3">Form Validateion</p>
			</v-car-title>

			<v-card-text>
				<validation-observer ref="observer" v-slot="{ invalid }">
					<v-form @submit.prevent="submit">
						<validation-provider
							name="Name"
							rules="required|max:10"
							v-slot="{ errors }"
						>
							<v-text-field
								label="Name"
								v-model="name"
								:counter="10"
								:error-messages="errors"
							>
							</v-text-field>
						</validation-provider>

						<validation-provider
							name="PhoneNumber"
							v-slot="{ errors }"
							:rules="{
								required: true,
								numeric: true,
								digits: 11
							}"
						>
							<v-text-field
								v-model="phoneNumber"
								:counter="11"
								label="PhoneNumber"
								:error-messages="errors"
							></v-text-field>
						</validation-provider>

						<validation-provider
							v-slot="{ errors }"
							name="E-Mail"
							:rules="{
								required: true,
								email: true
							}"
						>
							<v-text-field
								label="E-Mail"
								v-model="email"
								:error-messages="errors"
							></v-text-field>
						</validation-provider>

						<validation-provider
							v-slot="{ errors }"
							name="Select"
							label="Select"
							:rules="{
								required: true
							}"
						>
							<v-select
								label="Select"
								:items="items"
								v-model="select"
								:error-messages="errors"
							>
							</v-select>
						</validation-provider>

						<validation-provider
							v-slot="{ errors }"
							name="checkbox"
							:rules="{
								required: true
							}"
						>
							<v-checkbox
								label="Checkbox"
								value="1"
								v-model="checkbox"
								:error-messages="errors"
							></v-checkbox>
						</validation-provider>

						<v-btn
							type="submit"
							class="mr-4"
							color="primary"
							:disabled="invalid"
							>submit</v-btn
						>
						<v-btn>clear</v-btn>
					</v-form>
				</validation-observer>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { max, required, numeric, digits, email } from 'vee-validate/dist/rules';

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

extend('required', {
	...required,
	message: '{_field_}필드는 필수값입니다.'
});
extend('numeric', {
	...numeric,
	message: '{_field_}필드는 숫자로만 구성되어야합니다.'
});
extend('digits', {
	...digits,
	message: '{_field_}필드는 {length} 자리여야합니다.'
});

extend('email', {
	...email,
	message: '잘못된 이메일 주소입니다.'
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
			phoneNumber: null,
			email: null,
			select: null,
			checkbox: null,
			items: [
				{ text: '아이템1', value: 1 },
				{ text: '아이템2', value: 2 },
				{ text: '아이템3', value: 3 }
			]
		};
	},
	methods: {
		submit() {
			this.$refs.observer.validate().then(result => {
				console.log('result', result);

				if (result) {
					alert('양식 제출');
				}
			});
		},
		clear() {
			this.name = null;
			this.phoneNumber = null;
			this.email = null;
			this.select = null;
			this.checkbox = null;
		}
	}
};
</script>

<style></style>

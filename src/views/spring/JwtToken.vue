<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="auto">
				<v-card width="460">
					<v-card-text class="text-center px-12 py-16">
						<div class="text-h4 font-weight-black mb-10">
							JWT TOKEN 확인
						</div>
						<v-text-field
							label="이메일"
							clearable
							prepend-icon="mdi-email"
							v-model="username"
						></v-text-field>

						<v-text-field
							label="비밀번호"
							clearable
							prepend-icon="mdi-lock-outline"
							v-model="password"
						></v-text-field>

						<v-text-field
							label="응답값"
							clearable
							v-model="response"
						></v-text-field>

						<v-btn class="mt-6" rounded block x-large @click="login"
							>로그인</v-btn
						>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import axios from 'axios';

export default {
	name: 'SignIn',
	data() {
		return {
			username: null,
			password: null,
			response: null
		};
	},
	methods: {
		login() {
			console.log(this.username, this.password);
			axios.defaults.headers.post['Authorization'] = 'cos';

			axios
				.post('/jwt/login', {
					username: this.username,
					password: this.password
				})
				.then(response => {
					console.log(response);
				})
				.catch(ex => {
					console.log(ex);
				});
		}
	}
};
</script>

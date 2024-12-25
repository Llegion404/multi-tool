<script setup lang="ts">
import { onlyAllowNumber } from '@/composables/UserInput';
import {
	NConfigProvider,
	NFormItem,
	NGradientText,
	NInput,
	NSpace,
	type GlobalThemeOverrides,
} from 'naive-ui';
import { ref } from 'vue';

const mathTheme: GlobalThemeOverrides = {
	common: {
		primaryColor: '#168AAD',
		primaryColorHover: '#34A0A4',
	},
};

const firstNumber = ref(0);
const secondNumber = ref(0);
</script>

<template>
	<section class="h-screen relative">
		<div class="container z-20 pt-10">
			<h1>Do some <NGradientText type="success"> Maths </NGradientText></h1>
			<NConfigProvider :theme-overrides="mathTheme">
				<main class="pt-5">
					<NSpace>
						<NFormItem label="First number digits">
							<NInput
								:allow-input="onlyAllowNumber"
								placeholder="First number..."
								v-model="firstNumber" />
						</NFormItem>
						<NFormItem label="Second number digits">
							<NInput
								:allow-input="onlyAllowNumber"
								placeholder="Second number..."
								v-model="secondNumber" />
						</NFormItem>
					</NSpace>
				</main>
			</NConfigProvider>
		</div>
		<div
			class="absolute top-0 bg-[url('https://i.pinimg.com/originals/fc/37/a8/fc37a832ba5fe504962181e7dcfa370c.jpg')] h-full w-full -z-50 opacity-5"></div>
	</section>
</template>

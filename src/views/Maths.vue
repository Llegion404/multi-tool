<script setup lang="ts">
import { onlyAllowNumber } from '@/composables/UserInput';
import {
	NButton,
	NConfigProvider,
	NFlex,
	NFormItem,
	NGradientText,
	NInput,
	NInputNumber,
	NSpace,
	type GlobalThemeOverrides,
} from 'naive-ui';
import { ref } from 'vue';

const mathTheme: GlobalThemeOverrides = {
	common: {
		primaryColor: '#34A0A4',
		primaryColorHover: '#52B69A',
	},
	Form: {
		labelFontSizeTopMedium: '16px',
	},
	Input: {
		fontSizeMedium: '14px',
		textColor: 'white',
		fontWeight: 500,
		border: '1px solid #34A0A4',
		borderWarning: '1px solid #D9ED92',
	},
	Button: {
		textColorPrimary: 'white',
		textColorHoverPrimary: 'white',
		textColorFocusPrimary: 'white',
	},
};

const data = [
	{ num1: ' 876', num2: ' 453' },
	{ num1: ' 1023', num2: ' 389' },
	{ num1: ' 45', num2: ' 12' },
	{ num1: ' 144', num2: ' 12' },
	{ num1: ' 876', num2: ' 453' },
];

const firstNumber = ref(0);
const secondNumber = ref(0);
const tasksNumber = ref(0);
</script>

<template>
	<section class="h-screen relative">
		<div class="container z-20 pt-10">
			<h1>Do some <NGradientText type="success"> Maths </NGradientText></h1>
			<NConfigProvider :theme-overrides="mathTheme">
				<main class="pt-5">
					<NSpace align="center" justify="space-between">
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
							<NFormItem label="Tasks quantity">
								<NInputNumber
									:default-value="10"
									v-model="tasksNumber"
									step="5"
									status="warning" />
							</NFormItem>
						</NSpace>
						<NButton strong type="primary" size="large">Create</NButton>
					</NSpace>
					<section>
						<NFlex
							class="mb-5"
							v-for="task in data"
							:key="task.num1"
							align="center">
							<NInput
								autosize
								class="pr-1"
								:default-value="task.num1"
								:bordered="false" />
							+
							<NInput
								autosize
								class="pr-1"
								:default-value="task.num2"
								:bordered="false" />
						</NFlex>
					</section>
				</main>
			</NConfigProvider>
		</div>
		<div
			class="absolute h-full w-full -z-50 opacity-10 top-0 bg-[url('https://i.pinimg.com/originals/55/0c/80/550c80a326b9d687b038b5f5f72b0724.jpg')]"></div>
	</section>
</template>

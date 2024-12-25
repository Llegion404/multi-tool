<script setup lang="ts">
import { MathFormatProfessional24Filled } from '@vicons/fluent';
import { NGradientText, NIcon } from 'naive-ui';
import { RouterLink } from 'vue-router';
</script>

<template>
	<nav class="fixed top-0 left-0 right-0 z-50">
		<div class="container py-4">
			<section class="flex items-end gap-5 text-xl">
				<RouterLink class="text-3xl" to="/">Home</RouterLink>
				<RouterLink to="/math">
					<NIcon
						color="#4ABF9D"
						size="24"
						:component="MathFormatProfessional24Filled" />
					<NGradientText>maths</NGradientText>
				</RouterLink>
			</section>
		</div>
	</nav>
</template>

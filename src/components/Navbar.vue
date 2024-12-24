<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
	<nav>
		<div class="container py-4">
			<section class="flex gap-3 text-3xl">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/math">maths</RouterLink>
			</section>
		</div>
	</nav>
</template>

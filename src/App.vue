<script setup lang="ts">
import { RouterView } from 'vue-router';
import { NConfigProvider, darkTheme } from 'naive-ui';
</script>

<template>
	<NConfigProvider :theme="darkTheme">
		<RouterView />
	</NConfigProvider>
</template>

<style scoped></style>

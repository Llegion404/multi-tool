<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: "full",
  },
  borderColor: {
    type: String,
    default: "[#52B69A]",
  },
  fromColor: {
    type: String,
    default: "transparent",
  },
  toColor: {
    type: String,
    default: "transparent",
  },
});
</script>

<template>
  <div class="relative">
    <slot></slot>
    <div
      :class="`absolute h-px bottom-0 left-0 right-0 bg-gradient-to-r from-${fromColor} via-${borderColor} to-${toColor} w-${props.width}`"></div>
  </div>
</template>

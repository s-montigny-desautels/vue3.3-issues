<script setup lang="ts" generic="T">
const props = defineProps<{
  msg: T;
  "onUpdate:msg"?: (msg: string) => void;
}>();
</script>

<template>
  <div></div>
</template>

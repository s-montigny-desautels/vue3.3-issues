<script setup lang="ts">
import GenericTsx from "./components/GenericTsx";
import GenericVue from "./components/GenericVue.vue";

function update(msg: string) {}
</script>

<template>
  <div>
    <!-- @update:msg is of type (msg: unknown) => void -->
    <GenericTsx :msg="''" @update:msg="update" />

    <!-- Work for .vue file -->
    <GenericVue :msg="''" @update:msg="update" />
  </div>
</template>

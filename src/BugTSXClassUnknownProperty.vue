<script setup lang="ts">
import GenericTsx from "./components/GenericTsx";
import GenericVue from "./components/GenericVue.vue";

function update(msg: string) {}
</script>

<template>
  <div>
    <GenericTsx class="" :msg="''" />
    <GenericVue class="" :msg="''" />
  </div>
</template>

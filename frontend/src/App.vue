<script setup lang="ts">
import ChangeTheme from "./components/ChangeTheme/index.vue";
import { RouterView } from "vue-router";
import { useGlobalStore } from "@/stores/global";
import { onMounted } from "vue";

const globalStore = useGlobalStore();

onMounted(async () => {
  await globalStore.fetchAll();
});
</script>

<template>
  <ChangeTheme />
  <RouterView />
</template>

<template>
  <div class="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-y-4 md:gap-x-4 mt-6 max-w-lg mx-auto sm:max-w-xl">
    <template v-if="isLoading">
      <ProjectLoader v-for="index in 4" :key="index" />
    </template>
    <template v-else>
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/stores/global";
import ProjectLoader from "./ProjectLoader.vue";
import ProjectCard from "./ProjectCard.vue";

const globalStore = useGlobalStore();
const { isLoading, projects } = storeToRefs(globalStore);
</script>

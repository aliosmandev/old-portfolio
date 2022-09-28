<template>
  <div class="grid grid-cols-3 mt-5 max-w-lg mx-auto sm:max-w-3xl md:gap-x-6 md:grid-cols-4">
    <div v-for="skill in skills" :key="skill.name">
      <img width="190" :src="getMediaURL(skill.image.data.attributes.url)" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/stores/global";
import { getMediaURL } from "@/utils";

const globalStore = useGlobalStore();
const { skills } = storeToRefs(globalStore);
</script>

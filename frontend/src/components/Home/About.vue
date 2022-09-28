<template>
  <div class="max-w-lg mx-auto mt-8">
    <div class="flex flex-col items-center text-center sm:gap-x-6 sm:items-start sm:flex-row sm:text-start">
      <div class="h-full w-[200px] border-solid border-2 bg-white border-primary rounded-full">
        <img class="p-1 rounded-full" width="192" height="192" src="@/assets/images/avatar.png" alt="" />
      </div>
      <div class="flex flex-col justify-center gap-y-1 mt-4 sm:my-auto">
        <h3 class="text-custom dark:text-white font-medium text-4xl">Ali Osman Delişmen</h3>
        <p class="text-tertiary dark:text-darkTertiary text-lg">Software Engineer</p>
        <div class="mt-2 flex flex-row justify-center gap-x-4 sm:justify-start text-tertiary dark:text-darkTertiary">
          <a href="">
            <Icon name="github" :size="30" />
          </a>
          <a href="">
            <Icon name="linkedin" :size="24" />
          </a>
          <a href="">
            <Icon name="instagram" :size="24" />
          </a>
          <a href="">
            <Icon name="twitter" :size="24" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from "../Common/Icon/index.vue";
</script>

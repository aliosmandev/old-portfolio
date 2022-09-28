<template>
  <div class="mt-8 px-4 sm:px-0 mb-5">
    <TabGroup>
      <TabList class="max-w-lg mx-auto sm:max-w-xl flex bg-white dark:bg-darkSecondary rounded-lg p-3 sm:p-5">
        <Tab as="template" v-slot="{ selected }">
          <button :class="`tabs-button ${selected ? 'bg-background dark:bg-darkBackground' : ''}`">Portfolio</button>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
          <button :class="`tabs-button ${selected ? 'bg-background dark:bg-darkBackground' : ''}`">Skills</button>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Projects />
        </TabPanel>
        <TabPanel>
          <Skills />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script lang="ts" setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import Projects from "./components/Projects/index.vue";
import Skills from "./components/Skills/index.vue";
</script>

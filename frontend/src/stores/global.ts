import { defineStore } from "pinia";

import { getGlobal } from "@/api/global";
import type { Project, Skill } from "@/types";

export const useGlobalStore = defineStore({
  id: "globalStore",
  state: () => ({
    isLoading: true,
    projects: [] as Project[],
    skills: [] as Skill[],
  }),
  actions: {
    async fetchAll() {
      const { error, data } = await getGlobal();

      if (!error.value) {
        this.$patch({
          projects: data.value.data.attributes.projects,
          skills: data.value.data.attributes.skills,
          isLoading: false,
        });
      }
    },
  },
});

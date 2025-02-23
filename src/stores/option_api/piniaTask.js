import { defineStore } from "pinia";

export const usePiniaTaskStore = defineStore("PiniaTask", {
  // state
  state: () => ({
    tasks: [
      { id: 1, title: "Vue 3 pinia ", favStatus: true },
      { id: 2, title: "Vue 3 composiable ", favStatus: false },
      { id: 3, title: "Vue 3 component ", favStatus: false },
    ],
    filterTypes: ["all", "fav", "unFav"],
  }),

  //   getters
  getters: {
    getTasks: (state) => state.tasks,
    getFavTasks: (state) =>
      state.tasks.filter((task) => task.favStatus === true),
    getUnfavTasks() {
      return this.tasks.filter((task) => task.favStatus === false);
    },
    totalCount: (state) => state.tasks.length,
    favCount: (state) =>
      state.tasks.reduce((p, c) => (c.favStatus ? p + 1 : p), 0),
    unFavCount: (state) =>
      state.tasks.reduce((p, c) => (c.favStatus == false ? p + 1 : p, 0)),
  },

  // presist
  persist: true,
});

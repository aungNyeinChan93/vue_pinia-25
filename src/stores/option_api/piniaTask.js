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
      state.tasks.reduce((p, c) => (c.favStatus ? p : p + 1), 0),
  },

  //   actions
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    removeTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toogleFav(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.favStatus = !task.favStatus;
      }
    },
  },

  // presist
  persist: true,
});

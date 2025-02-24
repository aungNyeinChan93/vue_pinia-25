import axios from "axios";
import { defineStore } from "pinia";

export const usePiniaTaskStore = defineStore("PiniaTask", {
  // state
  state: () => ({
    tasks: [],
    isLoasding: false,
    errors: "",
    filterTypes: ["all", "fav", "unFav"],
  }),

  //   getters
  getters: {
    getTasks: (state) => state.tasks,
    getFavTasks: (state) =>
      state.tasks?.filter((task) => task.favStatus === true),
    getUnfavTasks() {
      return this.tasks.filter((task) => task.favStatus === false);
    },
    totalCount: (state) => state.tasks.length,
    favCount: (state) =>
      state.tasks?.reduce((p, c) => (c.favStatus ? p + 1 : p), 0),
    unFavCount: (state) =>
      state.tasks?.reduce((p, c) => (c.favStatus ? p : p + 1), 0),
  },

  //   actions
  actions: {
    async fetchTask(url) {
      try {
        this.isLoasding = true;
        const res = await axios.get(url);
        const data = await res.data;
        this.tasks = data;
      } catch (error) {
        this.errors = error;
      } finally {
        this.isLoasding = false;
      }
    },
    async addTask(url, task) {
      await axios.post(url, task);
    },
    async removeTask(url, id) {
      try {
        await axios.delete(`${url}/${id}`);
        this.tasks = this.tasks.filter((task) => task.id != id);
      } catch (error) {
        this.errors = error;
      }
    },
    async toogleFav(url, id) {
      const task = this.tasks.find((task) => task.id == id);
      if (task) {
        task.favStatus = !task.favStatus;
      }
      await axios.patch(`${url}/${id}`, { favStatus: task.favStatus });
    },
  },

  // presist
  // persist: true,
});

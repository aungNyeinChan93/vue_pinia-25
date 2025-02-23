import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  // states :is reactive
  state: () => ({
    name: "userStore",
    users: [],
    types: ["normal", "super", "gold", "diamond"],
  }),

  // actions
  actions: {
    async getUsers(url) {
      const { data } = await axios.get(url);
      this.users = data;
    },
    async postUser(url, userdata) {
      // this.users.push(userdata);
      await axios.post(url, userdata);
    },
  },

  // getters (computed)
  getters: {
    getName: (state) => state.name,
    allTypes: (state) => state.types.map((s) => s.toUpperCase()),
  },

  persist: true,
});

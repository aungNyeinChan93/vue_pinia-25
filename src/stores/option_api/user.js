import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  // states
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
  },

  // getters
  getters: {
    getName: (state) => state.name,
  },
});

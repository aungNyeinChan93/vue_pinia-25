import { defineStore } from "pinia";

export const useFetchStore = defineStore("fetch", {
  state: () => ({
    fetchData: [],
    isLoading: false,
    errors: "",
  }),

  // getters
  getters: {
    getFetchData: (state) => state.fetchData,
    getLoadingStatue: (state) => state.isLoading,
    getErrorStatus: (state) => state.errors,
    countData: (state) => state.fetchData.length,
  },

  // action
  actions: {
    async getData(url) {
      try {
        this.isLoading = true;
        const res = await fetch(url);
        const data = await res.json();
        this.fetchData = data;
      } catch (e) {
        this.errors = e;
      } finally {
        this.isLoading = false;
      }
    },
    async postData(url, data) {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
  },
});

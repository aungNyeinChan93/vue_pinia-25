import { onMounted, ref } from "vue";

export const useFetch = (url) => {
  const fetchData = ref([]);
  const isLoading = ref(false);
  const error = ref();

  const fetchingData = async () => {
    try {
      isLoading.value = true;
      const response = await fetch(url);
      const data = await response.json();
      fetchData.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => fetchingData());

  return { fetchData, error, isLoading, fetchingData };
};

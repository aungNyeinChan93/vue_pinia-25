import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCustomerStore = defineStore(
  "customer",
  () => {
    const customers = ref([]);
    const isLoading = ref(false);
    const isError = ref("");

    // getters
    const getCustomers = computed(() => customers.value);
    const totalCustomers = computed(() => customers.value.length);
    const goldCustoemrs = computed(() =>
      customers.value.filter((customer) => customer.type === "gold")
    );
    const silverCustomers = computed(() =>
      customers.value.filter((c) => c.type == "silver")
    );

    // actions
    const fetchCustomers = async (url) => {
      try {
        isLoading.value = true;
        const { data } = await axios.get(url);
        customers.value = data;
      } catch (e) {
        isError.value = e;
      } finally {
        isLoading.value = false;
      }
    };

    const postCustomer = async (url, customer) => {
      await axios.post(url, customer);
    };

    return {
      isLoading,
      isError,
      getCustomers,
      totalCustomers,
      goldCustoemrs,
      silverCustomers,
      postCustomer,
      fetchCustomers,
    };
  },
  {
    // persist: true,
  }
);

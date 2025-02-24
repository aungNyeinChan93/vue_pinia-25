<script setup>
import { useCustomerStore } from '@/stores/composition_api/customer';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import CustomerLists from '@/components/customer/CustomerLists.vue';
import CreateCustomer from '@/components/customer/CreateCustomer.vue';

const customerStore = useCustomerStore();
const { getCustomers, isLoading, isError, totalCustomers, goldCustoemrs, silverCustomers } = storeToRefs(customerStore)

const showStatus = ref(false)

onMounted(() => {
    customerStore.fetchCustomers('http://localhost:4002/customers')
})
const filterType = ref('all');

</script>



<template>
    <section>

        <!-- filter and toogle -->
        <div class="flex ms-[40px] py-4">
            <button class="px-4 py-1 bg-blue-200 rounded " @click="showStatus = !showStatus">
                <span v-if="!showStatus">Create Customer</span>
                <span v-else>Hide</span>
            </button>
            <button class="px-4 py-1 bg-blue-200 rounded ms-[40px]" @click="filterType = 'all'">
                All Customer
            </button>
            <button class="px-4 py-1 bg-blue-200 rounded ms-[40px]" @click="filterType = 'gold'">
                Gold Customer
            </button>
            <button class="px-4 py-1 bg-blue-200 rounded ms-[40px]" @click="filterType = 'silver'">
                Silver Customer
            </button>
        </div>
        <!-- create customer -->
        <div v-if="showStatus">
            <CreateCustomer />
        </div>

        <!-- Customer Lists -->
        <div v-show="Object.keys(getCustomers).length || !isLoading">

            <div v-show="filterType === 'all'">
                <CustomerLists :customers="getCustomers" />
            </div>
            <div v-show="filterType == 'gold'">
                <CustomerLists :customers="goldCustoemrs" />
            </div>
            <div v-show="filterType == 'silver'">
                <CustomerLists :customers="silverCustomers" />
            </div>

        </div>

        <div v-show="isLoading">Loading ... </div>
        <div v-show="isError">{{ isError }}</div>
    </section>
</template>

<script setup>
import CustomerCard from './CustomerCard.vue';

const props = defineProps({
    customers: Array,
})
</script>

<template>
    <section>
        <div class="grid grid.cols-1 md:grid-cols-4 gap-8 px-10 my-5">
            <template v-for="customer in customers" :key="customer">
                <CustomerCard :customer="customer" />
            </template>
        </div>
    </section>
</template>

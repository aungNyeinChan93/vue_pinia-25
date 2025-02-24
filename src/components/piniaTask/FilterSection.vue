<script setup>
import { usePiniaTaskStore } from '@/stores/option_api/piniaTask';
import Filter from './Filter.vue';

const { filterTypes } = usePiniaTaskStore();

const props = defineProps({
    filterStatus: { type: String }
})

const emit = defineEmits(['update:filterStatus']);

const handleFilterEmit = (filterType) => {
    emit('update:filterStatus', filterType);
}

</script>

<template>
    <section class="bg-slate-300  ">
        <div class="flex justify-end space-x-10 items-center p-4">
            <template v-for="filterType in filterTypes" :key="filterType">
                <Filter :filterType="filterType" @filter:emit="handleFilterEmit" :status="filterType == filterStatus" />
            </template>
        </div>
    </section>
</template>
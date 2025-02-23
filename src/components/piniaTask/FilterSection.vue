<script setup>
import { usePiniaTaskStore } from '@/stores/option_api/piniaTask';

defineProps({
    activeStatus: Boolean
})

const emit = defineEmits(['filter:emit'])
const { filterTypes } = usePiniaTaskStore();

</script>

<template>
    <section class="bg-slate-300  ">
        <div class="flex justify-end space-x-10 items-center p-4">
            <template v-for="filterType in filterTypes" :key="filterType">
                <span class="px-4 py-1 rounded-lg bg-yellow-300 hover:bg-yellow-200 text-gray-600 text-sm capitalize"
                    @click="$emit('filter:emit', filterType)">
                    {{ filterType }}
                </span>
            </template>
        </div>
    </section>
</template>
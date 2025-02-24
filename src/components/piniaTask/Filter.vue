<script setup>

const emit = defineEmits(['filter:emit'])
const props = defineProps({
    filterType: String,
    status: Boolean
})
</script>

<template>
    <span class="px-4 py-1 rounded-lg bg-yellow-300 hover:bg-yellow-200 text-gray-600 text-sm capitalize"
        :class="{ '!bg-red-300': status }" @click="$emit('filter:emit', filterType)">
        {{ filterType }}
    </span>
</template>
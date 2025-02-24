<script setup>
import { usePiniaTaskStore } from '@/stores/option_api/piniaTask';

const usePiniaTask = usePiniaTaskStore()
</script>

<template>
    <button @click="usePiniaTask.$reset" class="px-4 py-2 bg-red-600 rounded">Reset</button>
</template>
<script setup>

import { usePiniaTaskStore } from '@/stores/option_api/piniaTask';


const { removeTask, toogleFav } = usePiniaTaskStore();

const props = defineProps({
    task: { type: Object }
})

const remove = (id) => {
    if (confirm('are you sure')) {
        removeTask('http://localhost:4002/tasks', id)
    }
}

</script>

<template>
    <article class="flex items-center justify-between rounded-lg border border-gray-100 bg-white p-4">
        <div>
            <p class="text-2xl font-medium text-yellow-300/90">{{ task?.title }}</p>
        </div>

        <div class="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5 text-yellow-400" fill="none" viewBox="0 0 24 24"
                @click="remove(task.id)" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" class="size-5 text-gray-400"
                @click="toogleFav('http://localhost:4002/tasks', task?.id)" :class="{ 'text-red-600': task?.favStatus }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </div>
    </article>
</template>
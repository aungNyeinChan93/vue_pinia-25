<script setup>
import Task from './Task.vue';

const props = defineProps({
    task: { type: Object }
})
</script>

<template>
    <section>
        <div class="grid grid-cols-4 gap-4 mt-4">
            <div class="col-span-2 col-start-2">
                <Task :task="task" />
            </div>
        </div>
    </section>
</template>
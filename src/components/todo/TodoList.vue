<script setup>
defineProps(['todo'])

const emit = defineEmits(['delete:todo'])

</script>


<template>
    <div class="flex justify-between items-center border px-2  py-1 my-2 rounded border-green-600">
        <p
            class="px-4 py-2 rounded inline-block w-[500px] bg-slate-900  hover:bg-slate-400 hover:text-black text-white text-md my-2">
            {{
                todo.name
            }}
        </p>
        <button @click="$emit('delete:todo', todo.id)"
            class=" px-4 py-2 rounded bg-red-500 hover:bg-red-700 text-white">
            Delete
        </button>
    </div>
</template>
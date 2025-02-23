<script setup>
import { reactive } from 'vue';
import { useTodoStore } from '@/stores/composition_api/useTodo';

const { todos, addTodo } = useTodoStore();

const form = reactive({
    todo: ''
})

const add = (todo) => {
    if (todo !== "") {
        addTodo({ id: todos.length + 1, name: todo })
        form.todo = ''
    }
}

</script>

<template>
    <div class="grid grid-cols-4 mt-4 ">
        <div class="col-span-2 col-start-2">
            <div class="flex justify-evenly items-center">
                <input class="px-4 py-2 border border-red-300 w-[500px] rounded" type="text" v-model="form.todo"
                    id="todo" placeholder="Add Todo ">
                <button @click="add(form.todo)" class="px-8 py-2 bg-blue-400 hover:bg-blue-300 rounded"> Add</button>
            </div>
        </div>
    </div>
</template>
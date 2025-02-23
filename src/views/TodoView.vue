<script setup>
import { useTodoStore } from '@/stores/composition_api/useTodo';
import CreateTodoForm from "@/components/todo/CreateTodoForm.vue"
import TodoList from '@/components/todo/TodoList.vue';
const { removeTodo, getTodos } = useTodoStore();


const handleDeleteTodo = (id) => {
    if (confirm('are you sure?')) {
        removeTodo(id);
        window.location.reload()
    }
}
</script>

<template>
    <section>
        <CreateTodoForm />
        <div v-if="Object.keys(getTodos)" class="grid grid-cols-4 mt-4">
            <div class="col-span-2 col-start-2 px-8">
                <template v-for="todo in getTodos" :key="todo">
                    <TodoList :todo="todo" @delete:todo="handleDeleteTodo" />
                </template>
            </div>
        </div>
        <div v-else class="text-center p-4 text-red-600">Loading...!</div>
    </section>
</template>

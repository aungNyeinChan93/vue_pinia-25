<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '../stores/option_api/user'

const { users, getUsers } = useUserStore();

onMounted(async () => {
    await getUsers('https://jsonplaceholder.typicode.com/users')
});
</script>

<template>
    <section>
        <div class="users">
            <template v-for="user in users" :key="user.id">
                <li>
                    {{ user.name }}
                </li>
            </template>
        </div>
    </section>
</template>

<style scoped></style>
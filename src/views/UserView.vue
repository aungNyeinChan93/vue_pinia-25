<script setup>
import { onMounted, ref, watch } from 'vue';
import { useUserStore } from '../stores/option_api/user'
import UserListsTable from '@/components/user/UserListsTable.vue';

const { users, getName, getUsers, postUser } = useUserStore();

onMounted(() => {
    getUsers('http://localhost:4002/users');
});

</script>

<template>
    <section class="w-full h-screen mt-5 ">
        <div class="users grid grid-cols-1 gap-4 mx-10 ">
            <UserListsTable :users="users" />
        </div>
    </section>
</template>

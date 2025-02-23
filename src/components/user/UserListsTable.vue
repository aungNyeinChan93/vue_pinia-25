<script setup>
import UserList from './UserList.vue';

const props = defineProps({
    users: { type: Array, required: true }
})
</script>

<template>
    <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right">
                <tr>
                    <th class="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Name</th>
                    <th class="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Email</th>
                    <th class="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Phone</th>
                    <th class="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Website</th>
                    <th class="px-4 py-2">Action</th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
                <template v-for="user in users" :key="user">
                    <UserList :user="user" />
                </template>
            </tbody>
        </table>
    </div>
</template>
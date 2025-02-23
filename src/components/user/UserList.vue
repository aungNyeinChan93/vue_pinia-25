<script setup>
defineProps({
    user: { type: Object, required: true }
})
</script>

<template>
    <tr>
        <td class="px-4 py-2 font-medium whitespace-nowrap text-gray-900">{{ user.name }}</td>
        <td class="px-4 py-2 whitespace-nowrap text-gray-700">{{ user.email }}</td>
        <td class="px-4 py-2 whitespace-nowrap text-gray-700">{{ user.phone }}</td>
        <td class="px-4 py-2 whitespace-nowrap text-gray-700">{{ user.website }}</td>
        <td class="px-4 py-2 whitespace-nowrap">
            <a href="#"
                class="inline-block rounded-sm bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                View
            </a>
        </td>
    </tr>
</template>
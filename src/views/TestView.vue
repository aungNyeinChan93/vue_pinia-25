<script setup>
import { useFetch } from '@/composables/useFetch';

const { fetchData, error, isLoading } = useFetch(`http://localhost:4002/users`)

</script>

<template>
    <section>
        <div class="wrapper">
            <div v-if="isLoading">Loading ...</div>
            <div v-else>
                <template v-for="user in fetchData" :key="user">
                    <li>{{ user.name }}</li>
                </template>
            </div>
            <div v-show="error">{{ error }}</div>
        </div>
    </section>
</template>

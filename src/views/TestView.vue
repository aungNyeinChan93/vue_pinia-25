<script setup>
import { useFetch } from '@/composables/useFetch';
import { useFetchStore } from '@/stores/option_api/fetch';
import { onMounted } from 'vue';

const { fetchData, error, isLoading } = useFetch(`http://localhost:4002/users`)

const { getFetchData, countData, getData, postData } = useFetchStore()

onMounted(async () => {
    await getData('http://localhost:4002/users')
    // console.log(getFetchData);
})


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

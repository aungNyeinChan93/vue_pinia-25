<script setup>
import Header from '@/components/piniaTask/Header.vue';
import TaskLists from '@/components/piniaTask/TaskLists.vue';
import { usePiniaTaskStore } from '@/stores/option_api/piniaTask';
import FilterSection from '@/components/piniaTask/FilterSection.vue';
import { ref } from 'vue';

const { getTasks, getFavTasks, getUnfavTasks, filterTypes: [all, fav, unFav], favCount, totalCount, unFavCount } = usePiniaTaskStore();

const filterStatus = ref('all');
const handleFilter = (filterType) => {
    filterStatus.value = filterType;
}


</script>

<template>
    <section class="w-full min-h-screen bg-slate-100 mx-auto container ">

        <Header />

        <FilterSection @filter:emit="handleFilter" />

        <div v-if="filterStatus === 'all'">
            <p class="text-center text-red-400 p-3 text-lg">You have {{ totalCount }} tasks</p>
            <template v-for="task in getTasks" :key="task.id">
                <TaskLists :task="task" />
            </template>
        </div>
        <div v-if="filterStatus === 'fav'">
            <p class="text-center text-red-400 p-3 text-lg">You have {{ favCount }} tasks</p>
            <template v-for="task in getFavTasks" :key="task.id">
                <TaskLists :task="task" />
            </template>
        </div>
        <div v-if="filterStatus === 'unFav'">
            <p class="text-center text-red-400 p-3 text-lg">You have {{ totalCount - favCount }} tasks</p>
            <template v-for="task in getUnfavTasks" :key="task.id">
                <TaskLists :task="task" />
            </template>
        </div>

    </section>
</template>

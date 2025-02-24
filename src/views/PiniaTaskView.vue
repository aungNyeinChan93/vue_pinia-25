<script setup>
import { storeToRefs } from 'pinia';
import Header from '@/components/piniaTask/Header.vue';
import TaskLists from '@/components/piniaTask/TaskLists.vue';
import { usePiniaTaskStore } from '@/stores/option_api/piniaTask';
import FilterSection from '@/components/piniaTask/FilterSection.vue';
import { ref, reactive, onMounted } from 'vue';
import Reset from '@/components/piniaTask/Reset.vue';

const { fetchTask, getTasks, getFavTasks, getUnfavTasks, filterTypes: [all, fav, unFav], favCount, totalCount } = usePiniaTaskStore();

fetchTask('http://localhost:4002/tasks')

const filterStatus = ref('all');

const handelUpdateFilterStatus = (filterType) => {
    filterStatus.value = filterType
}
</script>

<template>
    <section class="w-full min-h-screen bg-slate-100 mx-auto container ">
        <Header />

        <FilterSection @update:filter-status="handelUpdateFilterStatus" :filterStatus="filterStatus" />

        <div v-if="filterStatus === all">
            <p class="text-center text-red-400 p-3 text-lg">You have {{ totalCount }} tasks</p>
            <template v-for="task in getTasks" :key="task.id">
                <TaskLists :task="task" />
            </template>
        </div>
        <div v-if="filterStatus === fav">
            <p class="text-center text-red-400 p-3 text-lg">You have {{ favCount }} tasks</p>
            <template v-for="task in getFavTasks" :key="task.id">
                <TaskLists :task="task" />
            </template>
        </div>
        <div v-if="filterStatus === unFav">
            <p class="text-center text-red-400 p-3 text-lg">You have {{ totalCount - favCount }} tasks</p>
            <template v-for="task in getUnfavTasks" :key="task.id">
                <TaskLists :task="task" />
            </template>
        </div>

        <Reset />

    </section>
</template>

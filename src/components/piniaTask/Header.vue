<script setup>
import { usePiniaTaskStore } from '@/stores/option_api/piniaTask';
import { reactive } from 'vue';

const { addTask, totalCount } = usePiniaTaskStore()

const form = reactive({
    id: totalCount + 1,
    title: "",
    favStatus: false
})
const add = () => {
    if (form.title !== "") {
        addTask(form)
        // form.title = ''
        window.location.reload()
    }
}

</script>

<template>
    <section class="bg-red-200 h-[120px] ">
        <div class="flex justify-center space-x-10 items-center p-4">
            <img src="@/assets/images/pinia.png" alt="img" class="w-[60px]">
            <div>
                <input type="text" id="task" placeholder="Pinia Task" v-model="form.title"
                    class="bg-yellow-300 p-2 rounded border border-red-400 inline-block w-[200px] md:w-[300px] ">
                <button @click="add"
                    class="bg-yellow-300 px-4 ms-2 text-gray-500 hover:bg-yellow-200 py-2 border rounded-2xl  border-red-400">
                    <svg width="20" height="10" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:#4A90E2; stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#1B75BC; stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        <polygon points="10,50 150,50 120,20 130,20 170,50 130,80 120,80 150,50"
                            fill="url(#arrowGradient)" stroke="#1B75BC" stroke-width="5" stroke-linejoin="round" />
                    </svg>

                </button>
            </div>
        </div>
    </section>
</template>
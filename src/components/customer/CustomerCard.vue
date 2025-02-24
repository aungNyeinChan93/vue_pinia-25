<script setup>

const props = defineProps(['customer'])
</script>

<template>
    <a href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
        <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div class="sm:flex sm:justify-between sm:gap-4">
            <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    {{ customer.name }}
                </h3>

                <p class="mt-1 text-xs font-medium text-gray-600">{{ customer.email }}</p>
            </div>

            <div class="hidden sm:block sm:shrink-0">
                <!-- <img alt="" :src="customer?.avator" class="size-16 rounded-lg object-cover shadow-xs" /> -->
            </div>
        </div>


        <dl class="mt-6 flex gap-4 sm:gap-6">

            <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">{{ customer.type }}</dt>
            </div>
        </dl>
    </a>
</template>
<script setup>
import { reactive } from 'vue';
import { useCustomerStore } from '@/stores/composition_api/customer';

const { postCustomer } = useCustomerStore();
const form = reactive({
    name: null,
    email: null,
    type: null,
    avator: null
})

const changeFile = (e) => {
    form.avator = e.target.files[0].name;
    // console.log(form.avator);

}
const submitForm = () => {
    postCustomer('http://localhost:4002/customers', form)
}
</script>

<template>
    <section>
        <div class="grid grid-cols-4 gap-6 ">
            <div class="col-span-2 col-start-2">
                <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <form @submit.prevent="submitForm" class="mx-auto mt-8 mb-0 max-w-md space-y-4"
                        enctype="multipart/form-data">
                        <div>
                            <div class="relative">
                                <input type="file" @input="changeFile"
                                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs" />
                            </div>
                        </div>

                        <div>
                            <div class="relative">
                                <input type="text" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                                    v-model="form.name" placeholder="Enter Name" />
                            </div>
                        </div>

                        <div>
                            <div class="relative">
                                <input type="email"
                                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                                    v-model="form.email" placeholder="Enter Email" />
                            </div>
                        </div>

                        <div>
                            <div class="relative">
                                <select class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                                    v-model="form.type">
                                    <option value="normal" disabled selected>Choose Type</option>
                                    <option value="normal">Normal</option>
                                    <option value="silver">Silver</option>
                                    <option value="gold">Gold</option>
                                </select>
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <button type="submit"
                                class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

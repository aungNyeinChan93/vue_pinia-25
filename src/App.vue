<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GuestVue from './components/layouts/Guest.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <GuestVue>
        <RouterView />
      </GuestVue>
    </div>
  </header>

  <RouterView />
</template>

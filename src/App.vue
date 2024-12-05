<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <main class="max-w-[1200px] w-full mx-auto px-10">
    <Header />
    <RouterView />
  </main>
</template>

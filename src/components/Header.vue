<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="mb-10">
    <nav class="flex justify-between py-5">
      <RouterLink to="/" activeClass="font-bold">Домой</RouterLink>
      <div class="flex gap-5">
        <RouterLink to="/doctors" activeClass="font-bold">Врачи</RouterLink>
        <RouterLink to="/nurses" activeClass="font-bold">Медсестры </RouterLink>
      </div>
    </nav>
  </header>
</template>

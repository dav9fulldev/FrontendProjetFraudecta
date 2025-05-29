<template>
  <div class="flex">
    <Sidebar />
    <main class="flex-1 p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './layouts/MainLayout.vue'
//import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="main-layout d-flex">
    <SidebarV />
    <div class="content flex-grow-1 p-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarV from '@/components/Sidebar.vue'

export default {
  name: 'MainLayout',
  components: {
    SidebarV,
  },
}
</script>

<style scoped>
.main-layout {
  height: 100vh;
}
.content {
  background-color: #f8f9fa;
  overflow-y: auto;
}
</style>

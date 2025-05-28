<template>
  <div>
    <h2 class="text-xl font-semibold">Historiques</h2>
    <ul>
      <li v-for="(item, index) in history" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      history: ['Document1.pdf - Valide', 'Document2.jpg - Falsifié'],
    }
  },
}
</script>

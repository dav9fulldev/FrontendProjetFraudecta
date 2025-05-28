<template>
  <div>
    <h2 class="text-xl font-semibold">Vérification de document</h2>
    <input type="file" @change="handleFile" class="my-4" />
    <div v-if="loading">Veuillez patientez svp...</div>
    <div v-if="result">
      Résultat : <strong>{{ result }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null,
      loading: false,
    }
  },
  methods: {
    handleFile(event) {
      this.loading = true
      const file = event.target.files[0]
      setTimeout(() => {
        // Simulation d'analyse IA
        this.result =
          Math.random() > 0.5 ? 'Votre document valide ✅' : 'Votre document falsifié ❌'
        this.loading = false
      }, 2000)
    },
  },
}
</script>

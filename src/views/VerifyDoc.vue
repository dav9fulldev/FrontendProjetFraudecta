<template>
  <div class="verify">
    <h1>Vérification de document</h1>
    <p>Sélectionnez un fichier à analyser pour détecter les falsifications.</p>

    <form @submit.prevent="verifyDocument">
      <input type="file" @change="handleFile" />
      <button type="submit" :disabled="!selectedFile">Lancer la vérification</button>
    </form>

    <div v-if="result" class="result">Résultat : {{ result }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
      result: null,
    }
  },
  methods: {
    handleFile(event) {
      this.selectedFile = event.target.files[0]
    },
    verifyDocument() {
      // Simulation temporaire
      this.result = 'Document valide (simulation)'
    },
  },
}
</script>

<style scoped>
.verify {
  padding: 2rem;
}
form {
  margin-top: 1rem;
}
.result {
  margin-top: 1rem;
  font-weight: bold;
  color: green;
}
button {
  width: 100%;
  padding: 0.6rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>

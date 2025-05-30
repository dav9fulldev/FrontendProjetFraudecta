<template>
  <div class="verify">
    <div class="login-container">
      <div class="login-card">
        <h1>Vérification de document</h1>
        <p>Sélectionnez un fichier à analyser pour détecter les falsifications.</p>
        <form @submit.prevent="verifyDocument">
          <div class="form-group"><input type="file" @change="handleFile" /></div>
          <button type="submit" :disabled="!selectedFile">Lancer la vérification</button>
        </form>
      </div>
    </div>
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
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.login-card {
  background: white;
  padding: 4rem;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 600px;
}

.verify {
  padding: 2rem;
}

form {
  margin-top: 1rem;
}

.form-group {
  margin-bottom: 1rem;
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
  border: 2em;
  border-radius: 20px;
  cursor: pointer;
}
</style>

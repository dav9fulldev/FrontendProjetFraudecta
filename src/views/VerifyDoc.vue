<template>
  <div class="verify">
    <div class="verify-wrapper">
      <div class="verify-illustration">
        <img src="/auth2.svg" alt="Illustration de vérification" />
      </div>

      <div class="login-card">
        <h1>Vérification de document</h1>
        <p>Sélectionnez un fichier à analyser pour détecter les falsifications.</p>
        <form @submit.prevent="verifyDocument">
          <div class="form-group file-upload">
            <label for="file-upload" class="custom-file-upload">
              📁 Choisir un fichier
            </label>
            <input id="file-upload" type="file" @change="handleFile" />
            <span v-if="selectedFile">{{ selectedFile.name }}</span>
          </div>
          <button type="submit" :disabled="!selectedFile">Lancer la vérification</button>
        </form>

        <div v-if="score !== null" class="result-card" ref="resultBlock">
  <h2>Résultat de la vérification</h2>
  <p>
    <strong>Fiabilité :</strong>
    <span :class="isReliable ? 'valid' : 'invalid'">
      {{ isReliable ? 'Document fiable' : 'Document potentiellement falsifié' }}
    </span>
  </p>
  <p><strong>Score de confiance :</strong> {{ score }}%</p>


  <button
    v-if="!isReliable"
    class="secondary-check-btn"
    @click="launchSecondaryCheck"
  >
    Lancer une deuxième vérification
  </button>
</div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      selectedFile: null,
      score: null,
      isReliable: false,
      erreur: null,
    }
  },
  methods: {
    handleFile(event) {
      this.selectedFile = event.target.files[0]
      this.score = null
      this.erreur = null
    },
    async verifyDocument() {
      if (!this.selectedFile) return

      const formData = new FormData()
      formData.append('image', this.selectedFile)

      try {
        const response = await axios.post('http://127.0.0.1:8000/api/predict/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log("Réponse de l'API :", response.data)
        const { classification, confiance } = response.data
        this.score = Math.round(confiance * 100)
        this.isReliable = classification === 'vrai'

        this.$nextTick(() => {
          this.$refs.resultBlock?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        })
      } catch (error) {
        this.erreur = "Une erreur est survenue lors de l'analyse du document."
        console.error(error)
      }
    },

    launchSecondaryCheck() {
      alert("Deuxième vérification déclenchée (OCR en cours...)")

    }
  }
}
</script>


<style scoped>
.verify {
  padding: 2rem;
  background-color: #f4f4f4;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.verify-wrapper {
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  width: 100%;
  overflow: hidden;
  align-items: stretch;
}

.verify-illustration {
  flex: 1;
  background-color: #e6f0ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.verify-illustration img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}



.login-card {
  flex: 1;
  padding: 3rem;
}

form {
  margin-top: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}


.file-upload {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

input[type='file'] {
  display: none;
}

.custom-file-upload {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-file-upload:hover {
  background-color: #0056b3;
}

button {
  width: 100%;
  padding: 0.6rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.result-card {
  margin-top: 2rem;
  background-color: #f9f9f9;
  border-left: 6px solid #007bff;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
}

.result-card h2 {
  margin-bottom: 1rem;
}

.valid {
  color: green;
  font-weight: bold;
}

.invalid {
  color: red;
  font-weight: bold;
}

.secondary-check-btn {
  margin-top: 1rem;
  background-color: #ffc107;
  color: #212529;
  font-weight: bold;
  padding: 0.6rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.secondary-check-btn:hover {
  background-color: #e0a800;
}
</style>

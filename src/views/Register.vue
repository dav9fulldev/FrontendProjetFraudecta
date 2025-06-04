<template>
  <div class="login-page">
    <header class="login-header">
      <img src="/logo_fraudecta.png" alt="Logo Fraudecta" class="logo" />
      <h1>Fraudecta</h1>
    </header>

    <div class="login-container">
      <div class="login-image">
        <img src="/verify-illustration.svg" alt="Illustration sécurité" />
      </div>

      <div class="login-card">
        <h2>Inscription</h2>
        <form @submit.prevent="register">


          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" id="email" required />
          </div>

          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input v-model="password" type="password" id="password" required />
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirmer le mot de passe</label>
            <input v-model="confirmPassword" type="password" id="confirmPassword" required />
          </div>

          <button type="submit">Créer un compte</button>
        </form>

        <p v-if="error" class="error">{{ error }}</p>
        <p v-if="success" class="success">{{ success }}</p>

        <p class="register-link">
          Déjà inscrit ?
          <a href="/login">Se connecter</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RegisterV',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null,
      success: null,
    }
  },
  methods: {
    async register() {
      this.error = null
      this.success = null

      if (this.password !== this.confirmPassword) {
        this.error = "Les mots de passe ne correspondent pas."
        return
      }

      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register/', {

          email: this.email,
          password: this.password
        })

        if (response.status === 201 || response.status === 200) {
          this.success = "Inscription réussie ! Redirection en cours..."
          setTimeout(() => {
            this.$router.push('/login')
          }, 2000)
        }
      } catch (err) {
        if (err.response && err.response.data) {
          this.error = err.response.data.error || "Une erreur est survenue."
        } else {
          this.error = "Erreur de connexion au serveur."
        }
      }
    }
  }
}

</script>

<style scoped>
.login-page {
  background-color: #f4f6f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.login-header {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0d6efd;
  color: white;
  gap: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.login-header .logo {
  width: 40px;
  height: 40px;
}

.login-header h1 {
  font-size: 1.8rem;
  margin: 0;
  font-weight: bold;
}

.login-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.login-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.login-image img {
  max-width: 100%;
  height: auto;
}

.login-card {
  flex: 1;
  max-width: 400px;
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.login-card h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

input {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #0d6efd;
  outline: none;
}

button {
  width: 100%;
  padding: 0.8rem;
  background-color: #0d6efd;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #084eb3;
}

.error {
  color: red;
  text-align: center;
  margin-top: 1rem;
}

.forgot-password {
  text-align: right;
  margin-top: 0.4rem;
}

.forgot-password a {
  color: #0d6efd;
  font-size: 0.9rem;
  text-decoration: none;
}

.forgot-password a:hover {
  text-decoration: underline;
}

.register-link {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.95rem;
}

.register-link a {
  color: #0d6efd;
  font-weight: 600;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}

.success {
  color: green;
  text-align: center;
  margin-top: 1rem;
}
</style>

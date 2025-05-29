<template>
  <div class="logout-page">
    <p>Déconnexion en cours...</p>
  </div>
</template>

<script>
export default {
  name: 'LogoutV',
  mounted() {
    // 1. Effacer les données de session ou token (ajuste selon ton stockage)
    localStorage.removeItem('user') // ou sessionStorage.clear()

    // 2. Rediriger vers la page de connexion
    this.$router.push('/login')
  },
}
</script>

<style scoped>
.logout-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>

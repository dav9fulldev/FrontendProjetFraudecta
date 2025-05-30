<template>
  <div class="dashboard">
    <h1>Tableau de bord</h1>
    <p>
      Ceci est votre tableau de bord. Accédez rapidement aux fonctionnalités clés de l'application.
    </p>

    <div class="cards">
      <div class="card" @click="$router.push('/verify')">🔍 Vérifier un document</div>
      <div class="card" @click="$router.push('/history')">🕒 Historique</div>
      <div class="card" @click="$router.push('/profile')">👤 Mon profil</div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 2rem;
}
.cards {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
.card {
  background-color: #f0f0f0;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}
.card:hover {
  background-color: #007bff;
  color: white;
}
</style>

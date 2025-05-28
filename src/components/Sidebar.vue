<template>
  <aside class="w-64 bg-gray-200 h-screen p-4">
    <h1 class="text-xl font-bold mb-4">AI Doc Checker</h1>
    <ul class="space-y-4">
      <li>
        <router-link to="/" class="block p-2 rounded hover:bg-gray-300">
          🏠 Tableau de bord
        </router-link>
      </li>
      <li>
        <router-link to="/verify" class="block p-2 rounded hover:bg-gray-300">
          📄 Vérifier un document
        </router-link>
      </li>
      <li>
        <router-link to="/history" class="block p-2 rounded hover:bg-gray-300">
          📚 Historique
        </router-link>
      </li>
      <li>
        <router-link to="/profile" class="block p-2 rounded hover:bg-gray-300">
          👤 Profil
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="block p-2 rounded hover:bg-gray-300">
          ℹ️ À propos
        </router-link>
      </li>
      <li>
        <router-link
          to="/login"
          class="block p-2 rounded hover:bg-gray-300 text-red-600 font-semibold"
        >
          🚪 Déconnexion
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.router-link-exact-active {
  background-color: #4b4f55;
}
</style>

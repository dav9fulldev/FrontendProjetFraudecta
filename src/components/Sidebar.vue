<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
    style="width: 280px; height: 100vh"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
      <span class="fs-4">Fraudecta</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link text-white" active-class="active">
          <i class="bi bi-house-door me-2"></i> Accueil
        </router-link>
      </li>
      <li>
        <router-link to="/verify" class="nav-link text-white" active-class="active">
          <i class="bi bi-shield-check me-2"></i> Vérifier
        </router-link>
      </li>
      <li>
        <router-link to="/history" class="nav-link text-white" active-class="active">
          <i class="bi bi-clock-history me-2"></i> Historique
        </router-link>
      </li>
      <li>
        <router-link to="/profile" class="nav-link text-white" active-class="active">
          <i class="bi bi-person-circle me-2"></i> Profil
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="nav-link text-white" active-class="active">
          <i class="bi bi-info-circle me-2"></i> À propos
        </router-link>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <router-link
        to="/logout"
        class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
      >
        <img
          src="https://via.placeholder.com/32"
          alt=""
          width="32"
          height="32"
          class="rounded-circle me-2"
        />
        <strong>Déconnexion</strong>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarV',
}
</script>

<style scoped>
.nav-link.active {
  background-color: #0d6efd;
}
</style>

<template>
  <div class="profile">
    <h1>Mon Profil</h1>

    <div class="profile-card">
      <img :src="gravatarUrl" alt="Photo de profil" class="avatar" />

      <div class="info">
        <p><strong>Nom :</strong> Brou David Yao</p>
        <p><strong>Email :</strong> {{ email }}</p>
        <p><strong>Statut :</strong> Étudiant en MIAGE</p>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'crypto-js/md5'

export default {
  name: 'ProfileV',
  data() {
    return {
      email: 'broudavid505@gmail.com',
    }
  },
  computed: {
    gravatarUrl() {
      const hash = md5(this.email.trim().toLowerCase()).toString()
      return `https://www.gravatar.com/avatar/${hash}?s=150&d=identicon`
    },
  },
}
</script>

<style scoped>
.profile {
  padding: 2rem;
}
.profile-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: #f4f4f4;
  padding: 1.5rem;
  border-radius: 8px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>

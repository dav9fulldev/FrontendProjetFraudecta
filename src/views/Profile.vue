<template>
  <section class="profile-container">
    <h1 class="title">Mon Profil</h1>

    <div class="profile-card">
      <img :src="gravatarUrl" alt="Photo de profil" class="avatar" />

      <div class="info">
        <p><strong>Nom :</strong> Brou David Yao</p>
        <p><strong>Email :</strong> {{ email }}</p>


      </div>
    </div>
  </section>
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
      return `https://www.gravatar.com/avatar/${hash}?s=160&d=identicon`
    },
  },
}
</script>

<style scoped>
.profile-container {
  padding: 2rem 3rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.profile-card {
  display: flex;
  align-items: flex-start;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 2rem;
  max-width: 700px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 2rem;
  border: 3px solid #3498db;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info p {
  font-size: 1.05rem;
  color: #333;
  margin-bottom: 0.8rem;
}
</style>

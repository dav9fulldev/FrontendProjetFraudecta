<template>
  <div class="history">
    <h1>Historique des vérifications</h1>
    <p>Voici la liste des documents que vous avez déjà analysés.</p>

    <table>
      <thead>
        <tr>
          <th>Nom du document</th>
          <th>Date</th>
          <th>Résultat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in mockHistory" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.date }}</td>
          <td :class="item.status === 'Valide' ? 'valid' : 'invalid'">{{ item.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HistoryV',
  data() {
    return {
      mockHistory: [
        { name: 'diplome1.png', date: '28/05/2025', status: 'Valide' },
        { name: 'diplome2.jpg', date: '27/05/2025', status: 'Falsifié' },
        { name: 'diplome3.png', date: '26/05/2025', status: 'Valide' },
      ],
    }
  },
}
</script>

<style scoped>
.history {
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.table-container {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: #f0f2f5;
  text-align: left;
  padding: 1rem;
  font-weight: 600;
  color: #444;
  border-bottom: 1px solid #ddd;
}

td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  color: #333;
}

.status-badge {
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  min-width: 100px;
}

.valid {
  background-color: #d4edda;
  color: #155724;
}

.invalid {
  background-color: #f8d7da;
  color: #721c24;
}
</style>

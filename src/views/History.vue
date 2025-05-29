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
        { name: 'carte_id.pdf', date: '28/05/2025', status: 'Valide' },
        { name: 'diplome.jpg', date: '27/05/2025', status: 'Falsifié' },
        { name: 'releve_notes.png', date: '26/05/2025', status: 'Valide' },
      ],
    }
  },
}
</script>

<style scoped>
.history {
  padding: 2rem;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}
th,
td {
  border: 1px solid #ccc;
  padding: 0.75rem;
  text-align: left;
}
.valid {
  color: green;
  font-weight: bold;
}
.invalid {
  color: red;
  font-weight: bold;
}
</style>

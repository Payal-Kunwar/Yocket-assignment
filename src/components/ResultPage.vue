<template>
  <div class="result-page">
    <h2>Result</h2>
    <div v-if="result.captured">
      <p>The fugitive was captured by {{ result.cop }}!</p>
    </div>
    <div v-else>
      <p>The fugitive escaped!</p>
    </div>
    <button @click="restartGame">Play Again</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ResultPage',
  computed: {
    ...mapState(['result'])
  },
  methods: {
    restartGame() {
      this.$store.commit('resetGame');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>

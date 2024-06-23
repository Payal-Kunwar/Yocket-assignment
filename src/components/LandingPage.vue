<template>
    <div class="landing-page">
      <h1>Criminal Escape Artist Capture Simulation</h1>
      <p>Welcome to the game. Your mission is to capture the notorious criminal escape artist.</p>
      <button @click="startGame">Start Game</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
    methods: {
      startGame() {
        this.$router.push('/city-selection');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  
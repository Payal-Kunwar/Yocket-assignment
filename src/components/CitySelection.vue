<template>
  <div class="city-selection">
    <h2>Select a City for Each Cop</h2>
    <div v-for="(cop, index) in cops" :key="index">
      <label :for="'cop-' + index">Cop {{ index + 1 }}:</label>
      <select :id="'cop-' + index" v-model="cop.city">
        <option v-for="city in cities" :key="city.name" :value="city.name">{{ city.name }}</option>
      </select>
    </div>
    <button @click="proceedToVehicleSelection">Next</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CitySelection',
  data() {
    return {
      cops: [
        { name: 'Cop 1', city: '' },
        { name: 'Cop 2', city: '' },
        { name: 'Cop 3', city: '' }
      ]
    };
  },
  computed: {
    ...mapState(['cities'])
  },
  methods: {
    proceedToVehicleSelection() {
      const selectedCities = this.cops.map(cop => cop.city);
      if (new Set(selectedCities).size !== this.cops.length) {
        alert('Each cop must select a unique city.');
        return;
      }
      this.$store.commit('setCitySelections', this.cops);
      this.$router.push('/vehicle-selection');
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>

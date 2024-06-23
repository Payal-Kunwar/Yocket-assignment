<template>
  <div class="vehicle-selection">
    <h2>Select a Vehicle for Each Cop</h2>
    <div v-for="(cop, index) in cops" :key="index">
      <label :for="'vehicle-' + index">Cop {{ index + 1 }} ({{ cop.city }} - {{ getCityDistance(cop.city) }} KM):</label>
      <select :id="'vehicle-' + index" v-model="cop.vehicle">
        <option v-for="vehicle in availableVehicles(cop.city)" :key="vehicle.type" :value="vehicle.type">{{ vehicle.type }}</option>
      </select>
    </div>
    <button @click="proceedToResult">Submit</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'VehicleSelection',
  data() {
    return {
      cops: []
    };
  },
  computed: {
    ...mapState(['cities', 'vehicles', 'citySelections'])
  },
  created() {
    this.cops = this.citySelections;
  },
  methods: {
    getCityDistance(city) {
      const selectedCity = this.cities.find(c => c.name === city);
      return selectedCity ? selectedCity.distance : 0;
    },
    availableVehicles(city) {
      const distance = this.getCityDistance(city);
      return this.vehicles.filter(vehicle => vehicle.range >= 2 * distance);
    },
    proceedToResult() {
      this.$store.commit('setVehicleSelections', this.cops);
      this.$store.dispatch('simulateFugitiveLocation').then(() => {
        this.$store.dispatch('determineResult');
        this.$router.push('/result');
      });
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>

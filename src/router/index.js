import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import CitySelection from '../components/CitySelection.vue';
import VehicleSelection from '../components/VehicleSelection.vue';
import ResultPage from '../components/ResultPage.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/city-selection', component: CitySelection },
  { path: '/vehicle-selection', component: VehicleSelection },
  { path: '/result', component: ResultPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

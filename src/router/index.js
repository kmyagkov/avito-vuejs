import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Ad from '../views/Ad.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/:id',
    component: Ad,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

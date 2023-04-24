<template>
  <v-app>
    <navbar></navbar>
  <v-main>
    <router-view />
  </v-main>
    <bottom-navbar></bottom-navbar>
</v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'; 
//imported navbar
import BottomNavbar from './components/BottomNavbar.vue'; 
export default {
  name: 'App',

  data: () => ({ 
    //returns the variables to template section
    components: { Navbar, BottomNavbar},
    name: 'App',
  }),
};
</script>

<style>
@import url('@/assets/styles.css');
</style>

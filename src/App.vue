<template>
  <NavBarComponent/>
  <router-view/>
  <footerComponent/>
</template>

<script>
import NavBarComponent from '@/components/NavBar.vue'
import footerComponent from '@/components/Footer.vue'
export default {
  components: {
    NavBarComponent,
    footerComponent
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: lightgrey;
  color: #2c3e50;
}
</style>

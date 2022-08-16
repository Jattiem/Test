<template>
<Navbar></Navbar>
  <router-view/>
<footer/>  
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

export default {
    components: { Navbar,Footer }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

#app {
  font-family: 'Abel', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>

<template>
  <div id="nav">
    <AppBar />
    <div id="body">
      <router-view />
    </div>
    <Footer/>
  </div>
</template>

<script>

import AppBar from "@/components/AppBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    AppBar,
    Footer
  },
}
</script>

<style>
  #body{
    padding: 20px;
  }
</style>


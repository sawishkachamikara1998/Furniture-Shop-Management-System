<template>
  <div id="nav">
    <TopAppBar />
    <AppBar />
    <div id="body">
      <router-view />
    </div>
    <Footer/>
  </div>
</template>

<script>

import TopAppBar from "@/components/appbar1.vue"
import AppBar from "@/components/AppBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    AppBar,
    Footer,
    TopAppBar
  },
}
</script>

<style>
  #body{
    padding: 20px;
  }
</style>


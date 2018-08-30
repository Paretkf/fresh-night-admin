<template>
  <div>
    <div class="w-60px f-left">
      <NavBar/>
    </div>
    <div class="w-60calc f-left h-30calc">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
export default {
  components: {
    NavBar
  }
}
</script>

<style>
.header {
  background-color: #000;
  color: #fff;
}
</style>

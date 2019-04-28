<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Fun4 Music</h1>
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped>
.m-header{
  text-align: center;
  background:#010101;
  color:#ddd;
}
</style>
<template>
<nav class="navbar">
  <div class="navbar-brand">
    <router-link :to="{name:'dict'}" class="navbar-item">Ivan</router-link>
    <div class="navbar-burger burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div  class="navbar-menu">
    <div class="navbar-start">
        <router-link :to="{name:'home'}" class="navbar-item">Home</router-link>
        <router-link :to="{name:'about'}" class="navbar-item">About</router-link>
    </div>
  </div>
</nav>
</template>
<script>
export default {

}
</script>

<style>
a.navbar-item{
    font-size: 20px
}
</style>

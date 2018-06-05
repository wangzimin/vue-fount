<template>
  <div id="app">
    <div class="header">
      <h2>welcome to your vue app</h2>
      <img src="" alt="">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .header {
    height: 135px;
    width: 100%;
    background:url("assets/images/titleImg.png")no-repeat;
  }

  .hrader h2 {
    color: #fff;
    font-size: 32px;
  }
</style>

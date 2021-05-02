<template>
  <div class="app-container">
    layout
    <router-view/>
    <tab-bar />
  </div>
</template>

<script>
import tabBar from './tabBar'
export default {
  components:{ 
    tabBar
  }
}
</script>

<style>

</style>
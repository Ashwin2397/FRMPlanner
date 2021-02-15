<template>
  <div id="app">
    <router-view/>
    <DescriptiveTag title="Hi there" progress="15"></DescriptiveTag>
  </div>
</template>

<script>

import DescriptiveTag from './components/DescriptiveTag.vue'

export default {
  name: 'App',
  components: {
    DescriptiveTag
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

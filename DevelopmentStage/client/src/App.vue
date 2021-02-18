<template>
  <div id="app">
    <router-view/>
    <ProgressBar title="Progress Bar" :progress="25"></ProgressBar>
    <DescriptiveTag title="Complex" color="yellow"></DescriptiveTag>
    <progress-ring/>
    <reading-tab title="CRM" readingNumber="9" :isRead="true"></reading-tab>
    <button v-on:click="calendar">HI</button>
  </div>
</template>

<script>

import ProgressBar from './components/ProgressBar.vue'
import DescriptiveTag from './components/DescriptiveTag.vue'
import ProgressRing from './components/ProgressRing.vue'
import ReadingTab from './components/ReadingTab.vue'


var c = require('calendar')

export default {
  name: 'App',
  components: {
    ProgressBar,
    DescriptiveTag,
    ProgressRing,
    ReadingTab
  },
  methods:{
    calendar: function(){
      var cal = new c.Calendar();     
      var m = cal.monthDays(2021, 1);
      for (let i=0; i<m.length; i++) console.log(m[i]);  
    }
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

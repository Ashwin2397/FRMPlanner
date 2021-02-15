<template>
    
    <div class="flex-container" :style="'background-color:'+color">
        <div>{{ title }}</div>
    </div>
</template>

<script>
export default {
    name: 'DescriptiveTag',
    props: {
        color: String,
        title: String
    }
}
</script>

<style>

.flex-container {
    width: 200px;
    display: flex;
    flex-wrap: nowrap;
}  
.flex-container > div {
  width: 200px;
  text-align: center;
  font-size: 30px;
  line-height: 100px;
} 
</style>
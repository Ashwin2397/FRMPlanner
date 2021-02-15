<template>
  
    <div class="progress">
        <div class="child" :style="'width:'+progress+'%'"></div>
        {{ title }}
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props:{
        title: String,
        progress: Number
    }    
}
</script>

<style>
.progress {
    width:200px;
    height:50px;
    border:1px solid black;
    position:relative;
    text-align: center;
    vertical-align: middle;

}

.child {
    content:'\A';
    position:absolute;
    background:black;
    top:0; bottom:0;
    left:0; 
}

</style>
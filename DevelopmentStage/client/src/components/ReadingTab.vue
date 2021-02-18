<template>
    <div class="grid-container">
        <div id="content" class="grid-item">
            {{ title }}, R{{ readingNumber }}
        </div>
        <div id="read" class="grid-item">
            {{ hasRead }}
        </div>
    </div>
</template>

<script>
export default {
    name:'ReadingTab',
    props:{
        title: String,
        readingNumber: String,
        isRead: Boolean
    },
    computed:{
        hasRead(){
            if(this.isRead){
                return 'X'
            }
            
            return ''
        }
    }
}
</script>

<style>


.grid-container {
    display: grid;
    background-color: #2196F3;
    width: 400px;
    height: 80px;
    grid-column-gap: 1px;

}
.grid-item {
    display: grid;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    text-align: center;
    align-content: center;
}

#content{
    grid-column: 1/5;
}

#read{
    grid-column: 5/6;
}
</style>
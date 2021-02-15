<template>
    <div id="progress">
        <svg id="slider" ref="slider"
                @mouseup="drop" width="150" height="38" viewBox="0 0 150 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.866394" y="0.789536" width="134.658" height="32.392" fill="url(#paint0_linear)"/>
            <line x1="67.2698" y1="33.1815" x2="67.2698" y2="0.789536" stroke="black" stroke-width="1.38823"/>
            <line x1="101.513" y1="33.1815" x2="101.513" y2="0.789536" stroke="black" stroke-width="1.38823"/>
            <line x1="33.4894" y1="33.1815" x2="33.4894" y2="0.789536" stroke="black" stroke-width="1.38823"/>
            <path 
                @mousedown="drag"
                :d="
                'M'+ slider.M + ',16.9855 '+
                'L'+ slider.L1 + ',37.4619' +
                'H'+ slider.H  + 
                'L'+ slider.L2 +',16.9855' + 
                'Z'
                " fill="blue"/>
            <defs>
            <linearGradient id="paint0_linear" x1="0.866394" y1="33.1815" x2="135.525" y2="33.1815" gradientUnits="userSpaceOnUse">
            <stop stop-color="#30E426" stop-opacity="0.89"/>
            <stop offset="1" stop-color="#FF000F" stop-opacity="0.78"/>
            </linearGradient>
            </defs>
        </svg>
        <input :value="offset+'%'">
    </div>

</template>

<script>
export default {
    name: "SliderMeter",
    data(){
        return {
            slider:{
                M: 125.46,
                L1: 138.684,
                H: 112.235,
                L2: 125.46
            },
            from: 0,
            offset:0
        }
    },
    computed:{

        cursor(){
            return ''
        },
    },
    methods:{
        drag(event){
            
            this.from = event.screenX

            // This is here so that we only trigger
            // this event when we click on the slider!
            this.$refs.slider.addEventListener('mousemove', this.move)
        },
        drop(event){
            this.from = 0 
            this.$refs.slider.removeEventListener('mousemove', this.move)
            console.log(event.offsetX)
        },
        move(event){
            
            Object.entries(this.slider).forEach(
                ([key, value]) => { this.slider[key] = value + (event.screenX - this.from) }
            );

            // To update the point of origin
           this.from = event.screenX
           this.offset = ((event.screenX - 480)/(616 - 480))*100

        }
    }
}
</script>

<style>

#progress{

    padding: 10px 10px;
}

</style>
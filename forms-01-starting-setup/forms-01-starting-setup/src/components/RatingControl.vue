<template>
    <ul>
        <li :class="{active:modelValue==='poor'}"><button type="button" @click="selectRating('poor')">Poor</button></li>
        <li :class="{active:modelValue==='average'}"><button type="button" @click="selectRating('average')">Average</button></li>
        <li :class="{active:modelValue==='great'}"><button type="button" @click="selectRating('great')">Great</button></li>
    </ul>
</template>

<script>


export default {
    props:['modelValue'],
    emit:['update:modelValue'],
    data(){
        return{
            activeRating: this.modelValue,
            };
    },
    methods:{
        selectRating(option){
            //this.activeRating=option;
            this.$emit('update:modelValue',option);
        }
    }
}
</script>


<style scoped>
.active{
    background: #da03da;
}
.active button{
    background: #da03da;
    border: none;
}
ul{
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}
li{
    margin: 0 1 rem;
    padding: 1rem;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-content: center;

}
button{
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>
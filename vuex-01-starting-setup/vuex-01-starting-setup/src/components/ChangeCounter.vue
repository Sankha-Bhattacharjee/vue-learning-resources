<template>
    <button @click="inc">Add 1</button>
    <button @click="increase({value:20})">Add 20</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods:{
    //     addOne(){
    //     this.$store.dispatch('increment');
    // }
    ...mapActions('counter',{
        inc:'increment',
        increase:'increase'
    })
    }
}
</script>
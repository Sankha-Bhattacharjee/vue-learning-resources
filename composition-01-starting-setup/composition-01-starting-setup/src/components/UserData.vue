<template>
  <h2>{{ userName }} - {{ age }}</h2>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });
    console.log(context);

    //context.emit('save-data',1); //this.$emit('save-data',1)
    const age = inject('userAge');

    onBeforeUnmount(function(){
        console.log('onBeforeUnmount');
    });
    onBeforeMount(function(){
        console.log('onBeforeMount');
    });
    onBeforeUpdate(function(){
        console.log('onBeforeUpdate');
    });
    onUnmounted(function(){
        console.log('onUnmounted');
    });
    onMounted(function(){
        console.log('onMounted');
    });
    onUpdated(function(){
        console.log('onUpdated');
    });
    return {
      userName: uName,
      age,
    };
  },
};
</script>

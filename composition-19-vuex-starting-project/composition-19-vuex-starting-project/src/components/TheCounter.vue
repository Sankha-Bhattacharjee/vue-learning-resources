<template>
  <h2>{{ counter }}</h2>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    console.log(store.state.counter);
    const counter = computed(() => store.getters.counter);

    return { counter };
  },
};
</script>
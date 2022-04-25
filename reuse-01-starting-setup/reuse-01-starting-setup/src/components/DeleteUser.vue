<template>
  <user-alert v-if="alertIsVisible" :title="alertText" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alert.js';

export default {
  components: {
    UserAlert,
  },
  data(){
    return {
      //vue mixes data defined in both custom component and mixins, but if there is a clash,
      // data defined in custom componentt wins
      alertText: 'Delete User?',
      alertIsVisible: true
    };
  },
  mixins: [alertMixin]
};
</script>
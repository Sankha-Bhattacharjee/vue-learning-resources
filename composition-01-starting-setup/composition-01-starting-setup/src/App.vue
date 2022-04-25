<template>
  <section class="container">
    <!-- <h2>{{ userName }} - {{ age }}</h2> -->
    <!-- <h2>{{ user.name }} - {{ user.age }}</h2> -->
    <user-data :first-name="firstName" :last-name="lastName" ></user-data>
    <button @click="setAge">Set new age</button>
    <div>
      <input type="text" placeholder="firstname" v-model="firstName" />
      <input type="text" placeholder="lastname" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
export default {
  components: {
    UserData,
  },
  setup() {
    // const uName = ref('Sankha');
    const uAge = ref(23);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const user = reactive({
      name: 'Sankha',
      age: 23,
    });

  provide('userAge',uAge)
    // setTimeout(function(){
    //   // uName.value = 'Babon';
    //   // uAge.value = 24;
    //   // user.value.name = 'Babon'; --- ref
    //   // user.value.age = '24';
    //   user.name = 'Babon'; // reactive
    //   user.age = '24';
    // },2000);

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uName,uAge], function(newValues,oldValues){
      console.log('old name' + oldValues[0]);
      console.log('new name' + newValues[0]);
      console.log('old age' + oldValues[1]);
      console.log('old age' + newValues[1]);
    });
    function setNewAge() {
      //user.age = 24;
      uAge.value = 24;
    }
    // function setFirstName(event){
    //   firstName.value = event.target.value;
    // }
    // function setLastName(event){
    //   lastName.value = event.target.value;
    // }
    function setLastName(){
      lastName.value = lastNameInput.value.value;
    }

    //return { userName: user.value.name, age: user.value.age };
    return {
      user: user,
      setAge: setNewAge,
      firstName,
      lastName,
      lastNameInput,
      userName: uName,
     // age: uAge,
      setLastName
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
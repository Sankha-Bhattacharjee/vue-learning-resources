<template>
  <div>
    <!-- <the-header></the-header> -->
    <TheHeader/>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
    <button @click="setSelectedComponents('active-goals')">Active Goals</button>
    <button @click="setSelectedComponents('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponents==='active-goals'"></active-goals>
    <manage-goals v-if="selectedComponents==='manage-goals'"></manage-goals> -->
    <keep-alive>
    <component v-bind:is="selectedComponents"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue'

export default {
  components:{
    TheHeader,ActiveGoals,ManageGoals
  },
  data() {
    return {
      selectedComponents:'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponents(cmp){
      this.selectedComponents=cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
<template>
  <div id="app">
   <!--
   <router-link to="/foo">Go to Foo</router-link>
   <router-link to="/bar">Go to Bar</router-link>
   -->

    <!--
    <div class="room-list-wrapper">
      <room-list></room-list>
    </div>
    <div class="message-wrapper">
    </div>
    -->
    <broadcast></broadcast>

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import RoomList from './components/RoomList';

import Broadcast from './components/Broadcast';

export default {
  name: 'app',
  components: {
    Broadcast,
  },
};
</script>

<style>
body {
  height: 100vh;
  background: #dad6d6;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.room-list-wrapper {
  margin-right: 15px;
}
</style>

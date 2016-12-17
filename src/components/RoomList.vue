<template>
  <div class="room-list">
  <ul class="errors">
    <li class="error" v-for="error in state.roomErrors">
      {{error}}
    </li>
  </ul>

  <div v-for="room in state.rooms">
    <!-- <input type="checkbox" id="checkbox" v-model="room.selected"> -->
    <input type="checkbox" id="checkbox" v-model="room.selected" v-on:click="rooms.commit('updateNumberActive', !room.selected);">
    <label for="checkbox">{{ room.name }} - {{room.selected}}</label>
  </div>
</template>

<script>
import rooms from '../models/rooms';

export default {
  name: 'room-list',
  data() {
    return {
      state: rooms.state,
      rooms,
    };
  },
  created() {
    rooms.dispatch('get');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  background: white;
}

li.errors {
  display: inline-block;
  margin: 0 10px;
  color: red;
}

a {
  color: #42b983;
}
.errors {
  color: red;
}
</style>

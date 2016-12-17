<template>
  <div class="broadcast">

    <div class="room-list-wrapper">

      <div class="select-rooms">
        Select Room(s):
      </div>

      <room-list></room-list>
    </div>
    <div class="message-wrapper">
      <div class="message-input">
       <ul class="errors">
          <li class="error" v-for="error in state.messageErrors">
            {{error}}
          </li>
        </ul>
        <textarea v-model="state.message" placeholder="What do you want to send?"></textarea>
      </div>
      <div class="submit-message" v-on:click="rooms.dispatch('send');">
        Send
      </div>
    </div>
  </div>

</template>

<script>
import rooms from '../models/rooms';

import RoomList from './RoomList';

export default {
  data() {
    return {
      state: rooms.state,
      rooms,
    };
  },
  components: {
    RoomList,
  },
};
</script>

<style scoped>

.select-rooms {
  padding-top: 15px;
}

.submit-message {
  height: 50px;
  width: 150px;
  font-size: 22px;
  font-weight: 600;
  border: solid 1px white;
  border-radius: 5px;
  text-align: center;
  line-height: 48px;
}

ul {
  list-style-type: none;
  padding: 0;
  background: white;
}
li {

}
.broadcast {
  display: block;
  position: absolute;
  width: 940px;
  transform: translate(-50%, 0%);
  left: 50%;
  padding: 0px 0px 15px 15px;
  background: #8a8c88;
  color: white;

}

.message-input > textarea {
  width: 100%;
  height: 150px;
  font-size: 22px;
}
.room-list-wrapper {
  display: inline-block;
  vertical-align: top;
  width: 300px
}

.message-wrapper {
  display: inline-block;
  vertical-align: top;
  width: 600px;
}
.errors {
  color: red;
}
</style>
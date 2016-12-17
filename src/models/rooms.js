import Vue from 'vue';

import Vuex from 'vuex';

const VueResource = require('vue-resource');

Vue.use(VueResource);

Vue.use(Vuex);

const state = {
  rooms: [],
  roomErrors: [],
  messageErrors: [],
  numSelectedRooms: 0,
  selectedRooms: [],
  message: '',
};

const mutations = {
  set(s, items) {
    const s2 = s;
    s2.rooms = items;
  },
  setMessage(s, msg) {
    const s2 = s;
    s2.message = msg;
  },
  setRoomErrors(s, items) {
    const s2 = s;
    s2.roomErrors = items;
  },
  setMessageErrors(s, items) {
    const s2 = s;
    s2.messageErrors = items;
  },
  updateNumberActive(s, selected) {
    const s2 = s;
    if (selected) {
      s2.numSelectedRooms += 1;
    } else {
      s2.numSelectedRooms -= 1;
    }
    console.log(s2.numSelectedRooms);
  },
};

const actions = {
  get(context) {
    Vue.http.get('https://casperconnection.com/api/hipchat/rooms').then((response) => {
      console.log(response);
      try {
        const data = JSON.parse(response.body);
        for (let x = 0; x < data.items.length; x += 1) {
          data.items[x].selected = false;
        }
        context.commit('set', data.items);
      } catch (e) {
        context.commit('setRoomErrors', ['Unable to retrieve rooms.']);
      }
    });
  },
  send(context) {
    let hasError = false;
    if (!context.state.message || context.state.message === '') {
      hasError = true;
      context.commit('setMessageErrors', ['Message can not be blank.']);
    } else {
      context.commit('setMessageErrors', []);
    }
    const sendTo = [];

    for (let x = 0; x < context.state.rooms.length; x += 1) {
      if (context.state.rooms[x].selected) {
        sendTo.push(context.state.rooms[x].name);
      }
    }
    if (sendTo.length === 0) {
      hasError = true;
      context.commit('setRoomErrors', ['At least one room should be selected.']);
    }

    if (!hasError) {
      context.commit('setRoomErrors', []);
      Vue.http.post('https://casperconnection.com/api/hipchat/rooms/broadcast', { message: context.state.message, rooms: sendTo }).then(() => {
        context.commit('setMessage', '');
      });
    }
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});

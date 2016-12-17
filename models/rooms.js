import Vue from 'vue';

import Vuex from 'vuex';

const VueResource = require('vue-resource');

Vue.use(VueResource);

Vue.use(Vuex);

const rooms = new Vuex.Store({
  state: [],
  mutations: {
    add(state, room) {
      state.push(room);
    },
    init(state, items) {
      state.concat(items);
      return state;
    },
  },
});


const init = () => {
  Vue.http.get('https://casperconnection.com/api/hipchat/rooms').then((response) => {
    console.log(response);
    try {
      const data = JSON.parse(response.body);
      console.log(data);
      rooms.commit('init', data.items);
    } catch (e) {
      console.log(e);
    }
  });
};

module.exports = rooms;

module.exports = init;

/*
export {
    rooms,
    init,
};
*/

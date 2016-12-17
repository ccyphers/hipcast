import Vue from 'vue';

// import VueRouter from 'vue-router';

import App from './App';

// Vue.use(VueRouter);

// const VueResource = require('vue-resource');

// Vue.use(VueResource);

// Vue.http.get('https://casperconnection.com/api/hipchat/rooms');

/* const Foo = { template: '<div>foo</div>' };
 const Bar = { template: '<div>bar</div>' };
 const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
];


const router = new VueRouter({
  routes,
});
 */

/* eslint-disable no-new */
new Vue({
  // router,
  el: '#app',
  template: '<App/>',
  components: { App },
});

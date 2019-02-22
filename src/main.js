import axios from 'axios';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:3000';

// add font awesome icons
library.add(
  require('@fortawesome/free-solid-svg-icons/faTimes').definition,
  require('@fortawesome/free-solid-svg-icons/faExclamationTriangle').definition,
);

dom.watch();

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});

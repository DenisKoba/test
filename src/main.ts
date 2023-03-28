import Vue from 'vue';
import router from '@/router';
import VModal from 'vue-js-modal';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-js-modal/dist/styles.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VModal);

new Vue({
  store,
  render: (h) => h(App),
  router,
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Toast, Cell, Button, Header } from 'mint-ui';
import 'normalize.css'
import '../node_modules/swiper/css/swiper.min.css'
import './assets/reset.css'
import './rem'




Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);

Vue.prototype.$toast = ({ message, position, duration }) => {
  Toast({
    message,
    position: position || "bottom",
    duration: duration || 2000
  });
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

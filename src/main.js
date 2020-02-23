import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import {JSO, Popup} from 'jso'

Vue.config.productionTip = false



// let config = {...}
// let j = new JSO(config)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')


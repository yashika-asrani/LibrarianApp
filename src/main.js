import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'


import GlobalMixins from '@/utils/GlobalMixins.vue'
import AppConstants from '@/utils/AppConstants'


Vue.mixin(GlobalMixins) 
//  Vue's mixin method to merge the GlobalMixins object into Vue's default options for all components. This allows the mixins to be accessible in any component without having to import them manually each time. 
Vue.prototype.$const = AppConstants
// it assigns the AppConstants object to Vue's prototype property, with a key of $const. This allows the AppConstants object to be accessed from any component as this.$const. 

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// unit test namespace and eachFitDo and 注解
import FHL from './fhl/ns'
FHL.STR.eachFitDo('[0-9]+','2423 23121', a1=>{ console.log(a1);});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  }
})

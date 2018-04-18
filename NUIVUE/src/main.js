// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FHL from './fhl/ns-fhl'
import $ from "jquery"

Vue.config.productionTip = false

let urlParameter = new FHL.NET.UrlParameter();
$(urlParameter).on("changed", function(){
  let r1 = urlParameter.result;
  console.log(r1);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  }
})

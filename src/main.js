import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import * as firebase from "firebase";

import storeOptions from "./stores/store";
import routerOptions from "./router/router";
import App from "./App.vue";

const config = Object.freeze({
  apiKey: "AIzaSyAgwt2JjxBk2UBMp9uZgQvtCntoY5yLKjo",
  authDomain: "vuex-firebase-project.firebaseapp.com",
  databaseURL: "https://vuex-firebase-project.firebaseio.com",
  projectId: "vuex-firebase-project",
  storageBucket: "vuex-firebase-project.appspot.com",
  messagingSenderId: "623919968530",
  appId: "1:623919968530:web:d6564d1c72f3f643e043cb",
  measurementId: "G-RJZDLGDHNF"
});

firebase.initializeApp(config);

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter(routerOptions);
const store = new Vuex.Store(storeOptions);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

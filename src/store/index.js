import Vue from "vue";
import Vuex from "vuex";

// import { public_url, private_url } from "./axios";
import jobs from "./module/jobs";

Vue.use(Vuex);


export default new Vuex.Store({

  modules: {
    jobs,
    
  },
});

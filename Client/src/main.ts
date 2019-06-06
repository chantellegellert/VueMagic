import Vue from "vue";
// true root of project
import App from "./App.vue";
// starts applications where it sees id specified
export default new Vue({
   render: (h) => h(App)
}).$mount("#app");

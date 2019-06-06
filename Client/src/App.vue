<template>
  <div>
      hello data {{ displayDataBase }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import * as request from "request-promise-native";

@Component({})
export default class App extends Vue {
    public displayDataBase = "";
  constructor() {
    super();
    this.test();
  }

  private async test() {
    // this is where set data base
    const result = await request.get({ uri: "http://localhost:9000" });
    this.displayDataBase = result;
    console.log(result);
  }
}
</script>

<style scoped>
</style>

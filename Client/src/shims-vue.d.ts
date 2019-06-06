// tells type script if you see a vue
// file its of type vue
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

import { reactive } from "./lib/petite-vue.js";

const config = reactive({
  BASE_URL: '/', 
  cssFiles: ["../assets/css/style.css"],
  jsFiles: ["../assets/js/jquery.js", "../assets/js/app.js", "../assets/js/vendors.js"],
  IPAccess: false,
  workPlan: "is to get more modules",
  initialCountNo: 10,
  route: "home",
  someValue: 'initial value',
});

export default config;
import { reactive } from "./lib/petite-vue.js";

const config = reactive({
  BASE_URL: '/', 
  baseCSSFiles: ["../assets/css/style.css"],
  baseJSFiles: ["../assets/js/jquery.js", "../assets/js/app.js", "../assets/js/vendors.js"],
cssFiles: [],
  jsFiles: [],
  IPAccess: false,
  workPlan: "is to get more modules",
  initialCountNo: 10,
  route: "home",
  someValue: 'initial value',
});

export default config;
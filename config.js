import { reactive } from "./lib/petite-vue.js";

const config = reactive({
  BASE_URL: '/',
  cssFiles: [],
  jsFiles: [],
  pageComponents: [],
  IPAccess: false,
  workPlan: "is to get more modules",
  initialCountNo: 10,
  route: "home",
  someValue: 'initial value',
});

export default config;
import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueApexCharts from "vue3-apexcharts";
const app = createApp(App);
app.use(VueApexCharts);

app.use(Quasar, quasarUserOptions).mount('#app')
// App.use(VueApexCharts);
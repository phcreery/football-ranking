import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';

// import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css' // flex

// import LoadScript from "vue-plugin-load-script";


const app = createApp(App);
app.use(PrimeVue, {ripple: true, outlined: false});
// app.use(LoadScript);

app.mount('#app')
// createApp(App).mount('#app')

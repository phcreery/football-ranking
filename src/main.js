import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'

// import 'primevue/resources/themes/saga-blue/theme.css'       //theme
// import 'primevue/resources/themes/lara-light-blue/theme.css' // theme
// import 'primevue/resources/themes/fluent-light/theme.css' // theme
// import 'primevue/resources/themes/saga-blue/theme.css' //theme
import './assets/_theme.scss' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons
import 'primeflex/primeflex.css' // flex

const app = createApp(App)
app.use(PrimeVue, { ripple: true, outlined: false })
app.use(ToastService)
app.directive('tooltip', Tooltip)

app.mount('#app')

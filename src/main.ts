import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { APP_TITLE } from './constants/projectConstants'

const documentTitle = APP_TITLE
document.title = documentTitle

createApp(App).mount('#app')

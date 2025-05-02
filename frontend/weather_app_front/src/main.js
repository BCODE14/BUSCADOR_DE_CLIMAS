
/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description creacion de la renderizacion de la app
 * @date 2025-04-29
 */


import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app');

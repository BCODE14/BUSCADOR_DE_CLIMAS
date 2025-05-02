

/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description definicion de rutas
 * @date 2025-04-29
 */


import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue';
import weatherdetail from '../views/weatherdetail.vue';

const routes=[

    {
        path:'/',
        name:'home',
        component:home,
    },
    {
        path:'/detail/:city',
        name:'weatherdetail',
        component:weatherdetail,
        props:true

    },

];

const router = createRouter({

    history:createWebHistory(),
    routes,

});

export default router;
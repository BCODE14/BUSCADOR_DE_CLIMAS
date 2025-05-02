

/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description vista detalles de busquedas recientes
 * @date 2025-04-29
 */


<template>
    <div class="detail">
        <h2>clima en :{{ city }}</h2>
        <Weathercard v-if="weatherdata" :weather="weatherdata"></Weathercard>
    </div>
</template>

<script>

    import axios from 'axios'
    import weathercard from '../components/weathercard.vue';

    export default{

        name:'weatherdetail',
        props:['city'],
        components:{

            weathercard,

        },
        data(){

            return{
                weatherdata:null,
            };
        },

        async created(){

            try {
                
                const res = await axios.get(`https://buscador-de-climas-backend.onrender.com/api/weather?city=${city}`);
                this.weatherdata = res.data;

            } catch (error) {

                console.error("erro al obtener el detalle del clima", err);
                
            }
        },
    };

</script>

<style scoped>

.detail{

    max-width: 600px;
    margin: 2rem auto;
}

</style>
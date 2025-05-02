

/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description vista principal - home 
 * @date 2025-04-29
 */


<template>

    <div class="home">

        <div class="logo">

            <img v-if="logo" :src="logo" />

        </div>
        
        <h1>Buscador climas</h1>

        <searchbar @search="fetchweather"></searchbar>

        <weathercard v-if="weatherdata" :weather="weatherdata"></weathercard>

        <historylist v-if="history.length" :history="history" @select="fetchweather" >
        </historylist>

        <modal v-if="modalVisible" :message="mensaje" :icon="icon" @close="modalVisible=false"  > </modal>

    </div>

</template>

<script>

    import axios from 'axios';
    import searchbar from '../components/searchbar.vue';
    import weathercard from '../components/weathercard.vue';
    import historylist from '../components/historylist.vue';
    import modal from '../components/modal.vue';
    import icon from '../assets/icon-emo.png';
    import logo from '../assets/logo.png'

    export default{

        name:'home',
        components:{
            searchbar,
            weathercard,
            historylist,
            modal
        },
        data(){
            return {

                weatherdata:null,
                history: [],
                modalVisible: false,
                icon:icon,
                mensaje:'Ciudad no encontrada o error en el servidor.',
                logo:logo 
               
            };
        },
        methods:{

            async fetchweather(city){

                try {
                    const response = await axios.get(`https://buscador-de-climas-backend.onrender.com/api/weather?city=${city}`)
                    this.weatherdata = response.data;

                    //guardar en el local history

                    if(!this.history.includes(city)){

                        this.history.unshift(city);
                        localStorage.setItem('weatherhistory', JSON.stringify(this.history));

                    }

                } catch (error) {

                    console.error('error al obtene el clima de la ciudad:', error);
                    this.modalVisible = true;
                    //alert("ciudad no encontrada o error en el servidor");

                }
            },

            loadlocalhistory(){

                const saved = localStorage.getItem('weatherhistory');
                if(saved){
                    this.history = JSON.parse(saved)
                }

            }
        },
        created(){
            this.loadlocalhistory();
        }

    };


</script>

<style scoped>

    .home{

        max-width: 600px;
        margin: 0 auto;
        padding: 2rem;
    }

    h1{
        text-align: center;
    }

    .logo{

        display: flex;
        height: 100%;
        margin-top: 2rem;
        justify-content: center;
        align-items: center;
        

    }

    img{
         max-width: 100px;
    }

</style>
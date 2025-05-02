
/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description componente que muestra el historial de busquedas
 * @date 2025-04-29
 */


<template>

    <div class="history">
        <h3>Tus busquedas recientes:</h3>
        <ul>
            <li v-for="city in history.slice(0,5)" :key="city" @click="$emit('select',city)">
            {{ city }}
            </li>
        </ul>

    </div>

</template>

<script>
    export default{
        name:'historylist',
        props:{

            history:Array,

        },       
    };

</script>

<style scoped>

    .history ul{

        list-style: none;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .history li{

        cursor: pointer;
        padding:0.5em;
        border-bottom: 1px solid #ccc;
    }

    .history li:hover{
        background-color: #e8f0fe;
    }

</style>

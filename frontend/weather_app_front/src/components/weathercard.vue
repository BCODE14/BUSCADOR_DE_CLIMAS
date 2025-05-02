

/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description componente card que muestra los detalles del clima de la ciudad buscada
 * @date 2025-04-29
 */

<template>

    <div class="card">

        <h2>{{ weather.location.name }} , {{ weather.location.country }}</h2>
        <img :src="weather.current.condition.icon" alt="icon del clima"> 
        <p><strong>Estado:</strong> {{ weather.current.condition.text }}</p>
        <p><strong>Temperatura:</strong>{{ weather.current.temp_c }}°c </p>
      
    </div>

</template>

<script>

    export default{

        name:'weathercard',
        props:{
            weather:Object,
        }

    }

</script>

<style scoped> 

.card{
    background: #f1f1f1;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
}

img{
    width: 64px;
}

</style>



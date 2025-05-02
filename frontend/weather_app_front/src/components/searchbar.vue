

/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description componente barra de busqueda
 * @date 2025-04-29
 */

<template>

    <form @submit.prevent="empezar_busqueda"  class="search-bar">

        <input v-model="city" type="text"  placeholder="Ingresa el nombre de una ciudad" required pattern="[A-Za-z]+" >
        <button type="submit"> Buscar </button>

    </form>

</template>

<script>

    export default {

        name:'searchbar',
        data(){

            return {
                city:''
            };

        },

        methods:{

            empezar_busqueda(){
                this.$emit('search', this.city );
                this.city = '';
            }

        }

    };

</script>




<style scoped >

.search-bar{
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;

}

input{
    flex: 1;
    padding: 0.5rem;
}

button{

    padding: 0.5rem 1rem;
    background-color: #2e86de;
    color:white;
    border:none;
    cursor: pointer;

}

</style>
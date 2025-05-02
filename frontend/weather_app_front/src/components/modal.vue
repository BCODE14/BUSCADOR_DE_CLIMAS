

/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description componente modal que muestra el mensaje de error en el servidor 
 * @date 2025-04-29
 */


<template>

    <div class="modal-overlay" @click="$emit('close')">

        <div class="modal-content">

            <img v-if="icon" :src="icon" class="modal-icon"/>
            <p>{{ message }}</p>

        </div>

    </div>

</template>

<script>

        export default{

            name: 'modal',
            props: {

                message: {

                    type: String,
                    default: 'Ciudad no encontrada o error en el servidor.'
                },
                icon:{

                    type: String,
                    default:''

                }

            },

            emits: ['close']


        }


</script>

<style scoped>

        .modal-overlay {

            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.1) ;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .modal-content {

            background: white;
            padding: 2rem;
            border-radius: 10px;
            min-width: 300px;
            text-align: center;
            font-size: 2rem;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        }

        .modal-icon{

            width: 80px;
            height: 80px;
            margin-top: 1rem;
            

        }

        

</style>

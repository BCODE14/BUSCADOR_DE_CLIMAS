
/**
 * @author Jackelin Marca
 * @version 1.0.0
 * @description componente raiz del proyecto-punto de entrada
 * @date 2025-04-29
 */


<template>
  <div id="app">
    
    <router-view/>

  </div>
</template>

<style scoped>

nav{
  background: #2e86de;
  padding: 1rem;

}

nav a{

  color: white;
  margin-right: 1rem;
  text-decoration: none;

}

nav a.router-link-active{
  font-weight: bold;
}

</style>
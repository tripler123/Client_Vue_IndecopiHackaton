<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">

      <v-layout column>
        <v-layout style="margin: -16px">
          <img src="@/assets/amador_1_v2.png" alt="Vuetify.js" class="mb-5" style="width: 100%;height: 100%;">
        </v-layout>

        <h1><strong>La campaña</strong></h1>
        <p>La campaña que tiene como objetivo principal promover en los proveedores, la autoregulacion como habito de buenas practicas, para que el consumidor reciba un producto y servicio de calidad.
        </p>
        <br>


        <v-layout style="margin: -16px">
        <img src="@/assets/amador_2.png" alt="Vuetify.js" class="mb-5" style="width: 100%;height: 100%;">
        </v-layout>

        <p>Amador es un pequeño empresario preocupado por el bienestar de sus clientes. Es por eso que Amador evalua su empresa con el objectivo de ofrecer mejores productos y garantizar un mejor servicio.</p>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>

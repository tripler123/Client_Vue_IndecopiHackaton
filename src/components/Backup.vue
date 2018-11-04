<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex xs12>

          <h1 class="mb-3">Resultados</h1>

          <v-card>

            <div class="pa-3">

              <h3 class="headline mb-3">Resumen</h3>

              <ul class="resumen pb-3">
                <li class="pa-3">
                  <p class="resumen__title">Información</p>
                  <p class="resumen__resultado bien">Bien</p>
                  <p class="resumen__score">
                    <span class="bien">4</span> / 4</p>
                </li>
                <li class="pa-3">
                  <p class="resumen__title">Idoneidad</p>
                  <p class="resumen__resultado regular">Regular</p>
                  <p class="resumen__score">
                    <span class="regular">2</span> / 4</p>
                </li>
                <li class="pa-3">
                  <p class="resumen__title">Discriminación</p>
                  <p class="resumen__resultado mal">Mal</p>
                  <p class="resumen__score">
                    <span class="mal">0</span> / 4</p>
                </li>
              </ul>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

              <h3 class="headline mb-3">Sugerencias</h3>

              <v-expansion-panel popout>
                <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
                  <div slot="header">Sugerencia {{i+1}}</div>
                  <v-card>
                    <v-card-text>
                      <p><strong>¿Cómo implementar la sugerencia?</strong></p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                      ex ea commodo consequat.</p>
                      
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </div>

            <v-card-actions>
              <v-btn flat color="orange">Imprimir</v-btn>
              <v-btn flat color="orange">Enviar por correo</v-btn>
            </v-card-actions>
          </v-card>

        </v-flex>


      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
  .bien {
    color: #009a2d;
  }

  .regular {
    color: #fda100;
  }

  .mal {
    color: red;
  }

  .resumen {
    list-style: none;
    text-align: center;
    display: flex;


    & li {
      background: #f8f8f8;
      width: 150px;
      margin-left: 16px;

      &:first-child {
        margin-left: 0;
      }

    }

  }

  .resumen__title {
    font-weight: bold;
    margin-bottom: 8px;
  }

  .resumen__resultado {
    font-size: 180%;
    margin-bottom: 8px;
  }

  .resumen__score {
    margin: 0;
  }

</style>

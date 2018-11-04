<template>
  <v-container fluid grid-list-lg>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>

        <!-- breadcumbs -->
        <v-flex xs12>
          <v-breadcrumbs class="bc_indecopi">
            <v-icon slot="divider">chevron_right</v-icon>
            <v-breadcrumbs-item>Proveedores</v-breadcrumbs-item>
            <v-breadcrumbs-item>Auto-evaluación</v-breadcrumbs-item>
          </v-breadcrumbs>
        </v-flex>

        <v-flex xs12>

          <v-layout row>

            <!-- imagen -->
            <v-flex d-flex justify-center>
              <v-card tile flat class="back_transp">
                <v-card-text>
                  <img src="../assets/resultados.png" alt="" style="width:100px; height: auto;">
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex d-flex xs12>

              <v-layout column>
                <v-flex d-flex justify-center align-center class="back_resultados">
                  <v-card tile flat class="back_transp">
                    <h1>Resultados</h1>
                    <p>A continuación se muestran los resultados de la auto-evaluación, sirvase revisar para poder corregir
                      los puntos en los que no se encuentre bien.</p>
                  </v-card>
                </v-flex>

              </v-layout>
            </v-flex>
          </v-layout>



          <v-card>

            <div class="pa-3" align-center>

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
                <v-expansion-panel-content v-for="(item,i) in get_formulario" :key="i" v-if="item.checked">
                  <div slot="header">Sugerencia </div>
                  <v-card>
                    <v-card-text>
                      <p>{{item.recomendacion}}</p>

                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </div>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="secondary">
                <v-icon left>print</v-icon>
                Imprimir
              </v-btn>

              <v-btn flat color="secondary">
                <v-icon left>mail</v-icon>
                Enviar por correo
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-flex>


      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  export default {
    data() {
      return {};
    },
    computed: {
      ...mapGetters(["get_formulario"])
    }
  };

</script>



<style lang="scss">
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
    justify-content: space-evenly;

    & li {
      background: #f8f8f8;
      width: 140px;
      height: 140px;
      margin-left: 16px;      
    border-radius: 50%;

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

  .bc_indecopi {
    background-color: #e9e9e9;
    border-radius: 4px;
    padding-left: 20px;
  }

  .back_resultados {
    background-image: url("../assets/bg_1.png");
    background-repeat: no-repeat;
    background-position: right;
  }

  .back_transp {
    background-color: transparent !important;
  }

</style>

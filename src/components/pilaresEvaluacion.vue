<template>
  <v-container fluid grid-list-lg>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
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
                  <img src="../assets/autoevaluacion.png" alt="" style="width:100px; height: auto;">
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex d-flex xs12>

              <v-layout column>
                <v-flex d-flex justify-center align-center class="back_resultados">
                  <v-card tile flat class="back_transp">
                  <h1>Auto-evaluación</h1>
                  <p>La auto-evaluación le permite a Ud. como <strong>PROVEEDOR</strong> saber que normativas son impuestas por
                    <strong>INDECOPI</strong> para garantizar la calidad del servicio brindado al consumidor.
                    Empiece marcando los <strong>checklist</strong> en los puntos que cumple con las normas y complete las observaciones de ser el caso en el cuadro de comentarios.
                  </p>
                  </v-card>
                </v-flex>

              </v-layout>
            </v-flex>
          </v-layout>
         

          <!-- STEP 1 -->
          <v-stepper v-model="e1">
            <v-stepper-header style="background-color: #f3eeee;">
              <v-stepper-step step="1" :complete="e6 > 1" editable>
                Derecho a la Información
                <small>explicación del grupo</small>
              </v-stepper-step>

              <v-divider></v-divider>
              <v-stepper-step step="2" :complete="e6 > 2" editable>
                Derecho de idoneidad
                <small>explicación del grupo</small>
              </v-stepper-step>

              <v-divider></v-divider>
              <v-stepper-step step="3" editable>
                Derecho a la no Discriminación
                <small>explicación del grupo</small>
              </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-container fluid>
                  <!-- STEP 1 -->
                  <v-checkbox label="¿El usuario cuenta con información relevante para elección adecuada de un producto?" color="red" v-model="formulario.s1_p1.checked"> </v-checkbox>

                  <v-checkbox label="¿Los precios indican tributos, comisiones y cargos totales?" color="red" v-model="formulario.s1_p2.checked"> </v-checkbox>

                  <v-checkbox label="¿Los precios están en moneda nacional?" color="red" v-model="formulario.s1_p3.checked"></v-checkbox>

                  <v-flex class="sub-item">
                    Procedencia del producto:
                    <v-btn-toggle>
                      <v-btn small :color="formulario.s1_p4.checked == true ? 'primary' : ''" @click="formulario.s1_p4.checked = !formulario.s1_p4.checked">Nacional</v-btn>
                      <v-btn small :color="formulario.s1_p4.checked == false ? 'primary' : ''" @click="formulario.s1_p4.checked = !formulario.s1_p4.checked">Extranjero</v-btn>
                    </v-btn-toggle>

                    <!--MANUFACTURA NACIONAL-->
                    <v-flex xs12 v-if="formulario.s1_p4.checked">
                      <v-checkbox class="ml-5" label="¿La información brindada esta en idioma castellano, es comprensible y de conformidad con el Sistema legal de Unidades de Medida?"
                        color="red" v-model="formulario.s1_p5">
                      </v-checkbox>
                    </v-flex>
                    <!--MANUFACTURA EXTRANJERA-->
                    <v-flex xs12 v-if="!formulario.s1_p4.checked" style="margin-top:10px">

                      <p style="color: red">Las siguientes informaciones deben de estar en idioma castellano: </p>

                      <v-checkbox class="ml-5" label="Ingredientes" color="red" v-model="formulario.s1_p5.checked"></v-checkbox>

                      <v-checkbox class="ml-5" label="Componentes" color="red" v-model="formulario.s1_p6.checked"></v-checkbox>

                      <v-checkbox class="ml-5" label="Garantias" color="red" v-model="formulario.s1_p7.checked"></v-checkbox>

                      <v-checkbox class="ml-5" label="Advertencia" color="red" v-model="formulario.s1_p8.checked"></v-checkbox>

                      <v-checkbox class="ml-5" label="Riesgos previsibles" color="red" v-model="formulario.s1_p9.checked"></v-checkbox>

                    </v-flex>

                  </v-flex>

                    <v-checkbox label="Se informa claramente que el producto tiene defectos, no es original y/o es de segunda?" color="red" v-model="formulario.s1_p10.checked"></v-checkbox>

                    <v-checkbox label="¿Los alimentos perecibles se encuentran refrigerados correctamente?" color="red" v-model="formulario.s1_p11.checked"></v-checkbox>

                </v-container>

                <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-container fluid>
                  <v-checkbox label="¿Los productos o servicios cumplen con  lo ofrecido al consumidor?" color="red" v-model="formulario.s2_p12.checked"
                    required></v-checkbox>

                  <v-checkbox label="Los productos cumplen con las garantias ofrecidas al consumidor?" color="red" v-model="formulario.s2_p13.checked"></v-checkbox>

                  <v-flex>
                    SE VENDE PRODUCTO CON RIESGO?:
                    <v-btn-toggle>
                      <v-btn :color="formulario.s2_p14.checked == true ? 'secondary' : ''" @click="formulario.s2_p14.checked = !formulario.s2_p14">SI</v-btn>
                      <v-btn :color="formulario.s2_p14.checked == false ? 'secondary' : ''" @click="formulario.s2_p14.checked = !formulario.s2_p14">NO</v-btn>
                    </v-btn-toggle>

                  </v-flex>

                  <v-flex xs12 v-if="formulario.s2_p14">
                    <!--PRODUCTOS CON RIESGOS-->
                    <v-checkbox label="Los productos tiene justificacion para el riesgo que conlleva su uso?" color="red" v-model="formulario.s2_p15.checked"></v-checkbox>
                  </v-flex>

                  <v-checkbox label="¿El consumidor tiene libertad de hacer reclamos?" color="red" v-model="formulario.s2_p16.checked"></v-checkbox>

                  <v-checkbox label="¿Sus productos tiene problemas de funcionamiento" color="red" v-model="formulario.s2_p17.checked"></v-checkbox>

                  <v-checkbox label="¿Los productos electricos indican los posibles riesgos de uso?" color="red" v-model="formulario.s2_p18.checked"></v-checkbox>

                  <v-checkbox label="¿Los objetos peligroso fuera del alcance de los niños?" color="red" v-model="formulario.s2_p19.checked"></v-checkbox>

                </v-container>

                <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>


              <v-stepper-content step="3">
                <v-container fluid>

                  <v-checkbox label="¿Se ha capacitado al personal de la empresa sobre discriminación: por sexo, idioma, religion, opinion y/o condicion economica?"
                    color="red" v-model="formulario.s3_p20.checked"></v-checkbox>

                  <v-checkbox label="Se cuenta con espacios exclusivos dentro de su estableciomientos para adultos mayores" color="red" v-model="formulario.s3_p21.checked"></v-checkbox>

                  <v-checkbox label="¿Se ha capacitado al personal sobre ATENCIÓN PREFERENCIAL?" color="red" v-model="formulario.s3_p22.checked"></v-checkbox>

                  <v-checkbox label="¿Su ambiente cuenta acceso para discapacitados?" color="red" v-model="formulario.s3_p23.checked"></v-checkbox>

                  <v-checkbox label="¿Su personal esta capacitado para atender a personas con habilidades especiales?" color="red" v-model="formulario.s3_p24.checked"></v-checkbox>

                  <!-- <v-checkbox label="Cuenta con algun personal que hable el quechua u otro idioma indígena?" color="red" v-model="formulario.s3_p25.checked"></v-checkbox> -->



                </v-container>

                <v-flex class="text-center">
                  <v-btn color="primary" @click.native="guardar_formulario()">VER MI RESULTADO</v-btn>
                </v-flex>

              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<script>
  export default {
    data() {
      return {
        e6: 1,
        e1: 1,
        formulario: {
          s1_p1: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "1",
            checked: false,
            categoria: "informacion"
          },
          s1_p2: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "2",
            checked: false,
            categoria: "informacion"
          },
          s1_p3: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "3",
            checked: false,
            categoria: "informacion"
          },
          s1_p4: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "4",
            checked: false,
            categoria: "informacion"
          },
          s1_p5: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "5",
            checked: false,
            categoria: "informacion"
          },
          s1_p6: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "6",
            checked: false,
            categoria: "informacion"
          },
          s1_p7: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "7",
            checked: false,
            categoria: "informacion"
          },
          s1_p8: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "8",
            checked: false,
            categoria: "informacion"
          },
          s1_p9: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "9",
            checked: false,
            categoria: "informacion"
          },
          s1_p10: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "10",
            checked: false,
            categoria: "informacion"
          },
          s1_p11: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "11",
            checked: false,
            categoria: "informacion"
          },
          s2_p12: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "12",
            checked: false,
            categoria: "informacion"
          },
          s2_p13: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "13",
            checked: false,
            categoria: "informacion"
          },
          s2_p14: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "14",
            checked: false,
            categoria: "informacion"
          },
          s2_p15: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "15",
            checked: false,
            categoria: "informacion"
          },
          s2_p16: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "16",
            checked: false,
            categoria: "informacion"
          },
          s2_p17: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "17",
            checked: false,
            categoria: "informacion"
          },
          s2_p18: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "18",
            checked: false,
            categoria: "informacion"
          },
          s2_p19: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "19",
            checked: false,
            categoria: "informacion"
          },
          s3_p20: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "20",
            checked: false,
            categoria: "informacion"
          },
          s3_p21: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "21",
            checked: false,
            categoria: "informacion"
          },
          s3_p22: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "22",
            checked: false,
            categoria: "informacion"
          },
          s3_p23: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "23",
            checked: false,
            categoria: "informacion"
          },
          s3_p24: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "24",
            checked: false,
            categoria: "informacion"
          },
          s3_p25: {
            pregunta: "Los productos o servicios cumplen con lo ofrecido al consumidor?",
            recomendacion: "25",
            checked: false,
            categoria: "informacion"
          },


        }
      };
    },
    methods: {
      guardar_formulario() {
        this.$store.dispatch("guardar_formulario", this.formulario);
        this.$router.push("resultado");
      }
    }
  };

</script>

<style>
  .cont_ {
    padding: 10px;
  }

  .bc_indecopi {
    background-color: #e9e9e9;
    border-radius: 4px;
    padding-left: 20px;
  }
  .sub-item{
    background-color: #fafafa;
    border-radius: 4px;
  }

  .btn-toggle .btn {
   opacity: 1;
  }

</style>

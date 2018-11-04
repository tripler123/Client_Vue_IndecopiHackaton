<template>
  <v-app>

    <!-- Navigation Drawer -->
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed
      app>
      <div justify-center>
      <img  src="./assets/logo_indecopy.gif" alt="" class="logo_indecopy">
      </div>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" :to="item.url">
          <v-list-tile-action>                                                                                                                                                                                                                                                                                                        
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <!-- ToolBar -->
    <v-toolbar app :clipped-left="clipped" dark color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Log OUT</v-btn>
      </v-toolbar-items> -->
    </v-toolbar>


    <!-- contenido -->
    <v-content>
      <router-view/>
    </v-content>


    <!-- FOOTER -->
    <v-footer :fixed="fixed" app color="primary" dark>
      <v-layout flex align-center class="p15">
        <v-flex xs12 md6>
          <p class="direccion">
            SEDE CENTRAL LIMA SUR: Calle de la Prosa 104, San Borja.
            <br> SEDE LIMA NORTE: Av. Carlos Izaguirre 988, Urb. Las Palmeras, Los Olivos.
            <br> E-mail: consultas@indecopi.gob.pe
            <br>
          </p>
        </v-flex>
        <v-flex xs12 md6 class="text-xs-center">
          <img src="./assets/logo_ministerio.png" alt="">
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,

        title: "Amador se un buen proovedor",
        items: [{
            icon: "bubble_chart",
            title: "Inicio",
            url: "/"
          },
          {
            icon: "edit_location",
            title: "Vamos a INDECOPI",
            url: "/mapa"
          },
          
          {
            icon: "assignment",
            title: "Autoevaluacion",
            url: "/pilaresEvaluacion"
          },
          {
            icon: "bubble_chart",
            title: "Resultado",
            url: "/resultado"
          }
          
        ]
      };
    },
    name: "App"
  };

</script>

<style>
  .footer>*:first-child {
    margin-left: 0px;
  }

  .footer .direccion {
    margin: 0;
    color: white;
    font-size: 12px;
  }

  .p15 {
    padding: 15px;
  }

  .logo_indecopy{
    margin: 0 auto;
    display: flex;
    padding: 15px
  }

</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import * as firebase from "firebase";

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VBtnToggle,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VCard,
  VProgressLinear,
  VDialog,
  VForm,
  VTextField,
  VSubheader,
  VDivider,
  VAvatar,
  VSelect,
  VBreadcrumbs,
  VChip,
  VTooltip,
  VDataTable,
  VSwitch,
  VSnackbar,
  VTabs,
  VExpansionPanel,
  VAlert,
  VStepper,
  VCheckbox
  
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VBtnToggle,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCard,
    VProgressLinear,
    VDialog,
    VForm,
    VTextField,
    VSubheader,
    VDivider,
    VAvatar,
    VSelect,
    VBreadcrumbs,
    VChip,
    VTooltip,
    VDataTable,
    VSwitch,
    VSnackbar,
    VTabs,
    VExpansionPanel,
    VAlert,
    VStepper,
    VCheckbox
  }, 
    theme: {
      primary: '#9ac08d',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }

})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCafuiHRSXMILW1foKW4sSn6o6LGz9bOKg',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
    styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBB5QBoguRrAJUeXtCRS0AhjygotaIUiqI",
      authDomain: "indecopi-4c471.firebaseapp.com",
      databaseURL: "https://indecopi-4c471.firebaseio.com",
      projectId: "indecopi-4c471",
      storageBucket: "",
      messagingSenderId: "519478969740"
    });

  }
})

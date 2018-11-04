import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

//Importación de modulos

Vue.use(Vuex);

export const store = new Vuex.Store({
  /**
   *
   * == STATE
   * State(estado) general de la Aplicación.
   *
   */
  state: {
    formulario: null
  },

  /**
   *
   * == GETTERS
   * Funciones reutilizables que obtienen datos parciales del state.
   * Evita dependencias.
   *
   */
  getters: {
    get_formulario(state) {
      return state.formulario;
    }
  },

  /**
   *
   * == MUTATIONS
   * Funciones encargadas de cambiar el STATE de la Aplicación.
   * Operaciones síncronas.
   *
   */
  mutations: {
    set_formulario(state, payload) {
      state.formulario = payload     
    }
  },

  /**
   *
   * == ACTIONS
   * Funciones encargadas de cambiar el STATE de la Aplicación (No lo hacen directamente, sino mediante mutations).
   * Operaciones asíncronas.
   *
   */
  actions: {
    guardar_formulario({
      commit
    }, payload) {

      firebase.database().ref('/formulario').push(payload);

      commit("set_formulario", payload);

    }


  },

  /**
   *
   * == MODULES
   * Modularización de la aplicación para un mejor orden.
   *
   */
  modules: {

  }
});

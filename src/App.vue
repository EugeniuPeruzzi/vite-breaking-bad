<script>
// importo axios e i vari components
import axios from 'axios';

import AppHead from './components/AppHead.vue';
import AppMain from './components/AppMain.vue';
// Importo store.js 
import { store } from './store.js';


export default {
  // dico di utilizzare le componenti chiamate
  components: {
    AppHead,
    AppMain,
  },
  data() {
    return {
      // dico di utilizzare il documento store
      store,
    }
  },
  mounted() {
    this.getPokemon()
  },
  methods: {
    getPokemon() {
      store.myUrl = store.apiUrl;

      if (store.pokeType !== '') {
        store.myUrl += `&eq[type1]=${store.pokeType}`
      }

      axios.get(store.myUrl).then((response) => {
        store.pokeDex = response.data.docs;
        store.loading = false
        console.log(store.pokeDex);
      })
    }
  }
}
</script>

<template>
  <!-- Uso i template  -->
  <div>
    <AppHead @typeChange="getPokemon" />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
</style>

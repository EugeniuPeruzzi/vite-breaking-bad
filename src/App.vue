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
    // con la chiamata axios collego il documento store al aray vuoto pokeDex
    axios.get(store.apiUrl).then((response) => {
      store.pokeDex = response.data.docs;
      // aggiungo nel mounted il valore falso del loading 
      store.loading = false
      console.log(store.pokeDex);
    })
  },
}
</script>

<template>
  <!-- Uso i template  -->
  <div>
    <AppHead />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
</style>

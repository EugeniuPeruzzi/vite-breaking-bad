<script>
import axios from 'axios';

import AppHead from './components/AppHead.vue';
import AppMain from './components/AppMain.vue';

import { store } from './store.js';


export default {
  components: {
    AppHead,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    axios.get(store.apiUrl).then((response) => {
      store.pokeDex = response.data.docs;
      console.log(store.pokeDex);
    })
  },
}
</script>

<template>
  <div>
    <AppHead />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
</style>

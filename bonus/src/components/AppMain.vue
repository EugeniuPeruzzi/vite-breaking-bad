<script>
// importo poke card dove andro a inserire le card dei pokemon
import PokemonCards from '../components/PokemonCards.vue';
import AppLoader from './AppLoading.Vue'
// importo il documento store
import { store } from '../store.js';
export default {
    data() {
        return {
            // utilizzo il documento store
            store,
        }
    },
    components: {
        // utilizzo la componente Pokemon Cards
        PokemonCards,
        AppLoader,
    }
}

</script>

<template>
    <div>
        <!-- Creo la struttura html -->
        <div class="container grey-bckg p-5 rounded-4">
            <div class="row black-bckg  py-3 h overflow-auto" v-if="store.loading === true">
                <!-- ciclo l'array di pokedex dandogli il valore di pokemonList poi a sua volta gli trasferisco il valore a myPokemonList cha passero a pokemon cards -->
                <div class="col-6 col-md4 col-lg-3" v-for="(pokemoList, index) in store.pokeDex" :key="index">
                    <PokemonCards :myPokemonList="pokemoList" />
                </div>
            </div>
            <AppLoader v-else />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.grey-bckg {
    background-color: #DEDEDE;
}

.black-bckg {
    background-color: #40464C;
}

.h {
    height: 650px;
}
</style>
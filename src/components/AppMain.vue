<script>
import PokemonCards from '../components/PokemonCards.vue';
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    components: {
        PokemonCards,
    }
}

</script>

<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="(pokemoList, index) in store.pokeDex" :key="index" :myPoemonList="pokemoList">
                    <PokemonCards />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
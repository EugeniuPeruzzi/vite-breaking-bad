<script>
export default {
    // richiamo l'ogetto con props dal padre
    props: {
        myPokemonList: Object,
    }
}

</script>

<template>
    <!-- creo la card con i dati richiesti estrapolandoli dal array -->
    <div class="kard my-3 rounded-4"
        :class="myPokemonList.type1 === 'Grass' ? 'grass' : myPokemonList.type1 === 'Fire' ? 'fire' : myPokemonList.type1 === 'Water' ? 'water' : myPokemonList.type1 === 'Bug' ? 'bug' : myPokemonList.type1 === 'Normal' ? 'normal' : myPokemonList.type1 === 'Electric' ? 'electric' : myPokemonList.type1 === 'Dark' ? 'dark' : myPokemonList.type1 === 'Poison' ? 'poison' : ''">
        <div class="kard-content d-flex align-items-center justify-content-center flex-column p-4">
            <div class="img-container">
                <img :src="myPokemonList.imageUrl" alt="" class="rounded-circle">
            </div>
            <div class="">{{ myPokemonList.number }}</div>
            <h5><strong>{{ myPokemonList.name }}</strong></h5>
            <div class=""><i>{{ myPokemonList.type1 }}</i></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.grass {
    background-color: #DEFDE0 !important;
}

.fire {
    background-color: #FDDFDF !important;
}

.water {
    background-color: #DEF3FD !important;
}

.bug {
    background-color: #8cee4173 !important;
}

.normal {
    background-color: #D7D1BD !important;
}

.electric {
    background-color: #F8BC28 !important;
}

.dark {
    background-color: #806155 !important;
}

.poison {
    background-color: #8E498D !important;
}

img {
    height: 170px;
    width: 170px;
}
</style>
<script>
export default {
    props: {
        myPokemonList: Object,
    }
}

</script>

<template>
    <div class="kard my-3 rounded-4"
        :class="myPokemonList.type1 === 'Grass' ? 'grass' : myPokemonList.type1 === 'Fire' ? 'fire' : myPokemonList.type1 === 'Water' ? 'water' : ''">
        <div class="kard-content d-flex align-items-center justify-content-center flex-column">
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

img {
    height: 170px;
    width: 170px;
}
</style>
<script>
export default {
    // richiamo l'ogetto con props dal padre
    props: {
        myPokemonList: Object,
    },
    computed: {
        lowerCaseColors() {
            return this.myPokemonList.color.toLowerCase();
        }
    }
}

</script>

<template>
    <!-- creo la card con i dati richiesti estrapolandoli dal array -->
    <div class="kard my-3 rounded-4" :style="{ 'background-color': lowerCaseColors }">
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
.white {
    color: #fff;
}

img {
    height: 170px;
    width: 170px;
}
</style>
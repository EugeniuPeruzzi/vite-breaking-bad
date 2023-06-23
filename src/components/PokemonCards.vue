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
    <div class="kard my-3 rounded-4" :style="'background-color lowerCaseColors'">
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
// .green {
//     background-color: #DEFDE0 !important;
// }

// .red {
//     background-color: #FDDFDF !important;
// }

// .blue {
//     background-color: #DEF3FD !important;
// }

// .bug {
//     background-color: #8cee4173 !important;
// }

// .normal {
//     background-color: #D7D1BD !important;
// }

// .electric {
//     background-color: #F8BC28 !important;
// }

// .dark {
//     background-color: #806155 !important;
// }

// .poison {
//     background-color: #8E498D !important;
// }

img {
    height: 170px;
    width: 170px;
}
</style>
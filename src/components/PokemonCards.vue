<script>
export default {
    props: {
        myPokemonList: Object,
    }
}

</script>

<template>
    <div>
        <div class="img-container">
            <img :src="myPokemonList.imageUrl" alt="">
        </div>

    </div>
</template>

<style lang="scss" scoped></style>

<script>

import { store } from '../store.js'
export default {
    data() {
        return {
            store,
            allTypes: [
                "Bug",
                "Dark",
                "Dragon",
                "Electric",
                "Fairy",
                "Fighting",
                "Fire",
                "Flying",
                "Ghost",
                "Grass",
                "Ground",
                "Ice",
                "Normal",
                "Poison",
                "Psychic",
                "Rock",
                "Steel",
                "Water"
            ]
        }
    }
}
</script>
<template lang="">
    <div>
        <select class="form-select" aria-label="Default select example" v-model="store.pokeType">
            <option value="" selected>Select</option>
            <option v-for="(type, index) in allTypes" :key="index" :value="type">{{type}}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped></style>
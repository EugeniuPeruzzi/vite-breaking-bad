<script>
import { store } from '../store.js';

export default {

    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div>
        <div class="container py-4">
            <div class="row h min-width">
                <div class="col">
                    <div class="classes d-flex">
                        <div class="water dimension rounded-circle border border-light border-4"></div>
                        <div class="fire dimension rounded-circle border border-light border-4"></div>
                        <div class="eletric dimension rounded-circle border border-light border-4"></div>
                        <div class="grass dimension rounded-circle border border-light border-4"></div>
                    </div>
                </div>
                <div class="col-2 d-flex justify-content-end py-4">
                    <select class="form-select" aria-label="Default select example" v-model="store.pokeType"
                        @change="$emit('typeChange')">
                        <option value="" selected>Defaualt</option>
                        <option v-for="(type, index) in store.allTypes" :key="index" :value="type">{{ type }}</option>
                    </select>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.dimension {
    margin: 0px 10px;
    height: 50px;
    width: 50px;

    &:hover {
        scale: 1.8;
        margin-top: 15px;
    }
}

.h {
    height: 100px;
}

.water {
    background: rgb(2, 0, 36);
    background: linear-gradient(332deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 30%, rgba(255, 255, 255, 1) 100%);
}

.fire {
    background: rgb(255, 255, 255);
    background: linear-gradient(150deg, rgba(255, 255, 255, 1) 7%, rgba(246, 3, 3, 1) 64%, rgba(108, 1, 1, 1) 98%);
}

.eletric {
    background: rgb(255, 255, 255);
    background: linear-gradient(150deg, rgba(255, 255, 255, 1) 22%, rgba(238, 246, 3, 1) 64%, rgba(251, 255, 1, 1) 98%);
}

.grass {
    background: rgb(255, 255, 255);
    background: linear-gradient(150deg, rgba(255, 255, 255, 1) 22%, rgba(46, 246, 3, 1) 64%, rgba(8, 101, 0, 1) 94%);
}

.c {
    background-color: purple;
}
</style>
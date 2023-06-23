<script>
import { store } from '../store'

export default {
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <div class="d-flex align-items-center justify-content-center">
        <div class="loader-content">
            <div class="custom-loader">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
                    alt="PokeBall">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
}

.custom-loader {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 16px solid;
    border-color: #fffbfb #f62626;
    animation: s1 1s infinite;
}

@keyframes s1 {
    to {
        transform: rotate(1turn)
    }
}
</style>
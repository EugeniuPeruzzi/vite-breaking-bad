<script>
export


</script>
<template>
    <div>
        <div class="loader-content">
            <div class="custom-loader"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader-content {
    width: 300px;
    height: 300px;
}

.custom-loader {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 16px solid;
    border-color: #766DF4 #0000;
    animation: s1 0.5s infinite;
}

@keyframes s1 {
    to {
        transform: rotate(.5turn)
    }
}
</style>
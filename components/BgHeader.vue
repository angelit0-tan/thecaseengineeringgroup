<template>
    <div>
        <slot/>
    </div>
</template>
<style lang="scss" scoped>
.bg-service {
    @media (min-width: 768px) {
        min-height: 70vh;
    }

    background-repeat: no-repeat, repeat; 
    background-size: cover; 
    min-height: 30vh; 
    background-blend-mode: overlay;
}

.text-service {
    @media (min-width: 768px) {
        transform: translate(-70%, -50%)
    }
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
</style>
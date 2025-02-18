<template>
    <div class="dog-paw-header">
        <DogPawSvg is-filled />
        <DogPawSvg is-filled />
        <DogPawSvg />
        <DogPawSvg />
        <DogPawSvg />
        <DogPawSvg />
        <DogPawSvg />
    </div>
</template>
<script setup lang="ts">
    import DogPawSvg from '../atoms/DogPawSvg.vue';
</script>
<style lang="css" scoped>
    .dog-paw-header {
        @apply flex justify-center gap-6 md:gap-8;
    }

    .dog-paw-header > svg {
        @apply w-[1.45rem] h-[1.45rem] rotate-90;
    }

    .dog-paw-header > svg:nth-child(even) {
        @apply mt-3;
    }
</style>

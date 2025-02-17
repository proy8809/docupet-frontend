<template>
    <div class="hidden md:flex md:justify-center md:gap-8">
        <DogPawSvg class="w-5 h-5 rotate-90" is-filled />
        <DogPawSvg class="w-5 h-5 mt-4 rotate-90" is-filled />
        <DogPawSvg class="w-5 h-5 rotate-90" />
        <DogPawSvg class="w-5 h-5 mt-4 rotate-90" />
        <DogPawSvg class="w-5 h-5 rotate-90" />
        <DogPawSvg class="w-5 h-5 mt-4 rotate-90" />
        <DogPawSvg class="w-5 h-5 rotate-90" />
    </div>
</template>
<script setup lang="ts">
    import DogPawSvg from '../atoms/DogPawSvg.vue';
</script>

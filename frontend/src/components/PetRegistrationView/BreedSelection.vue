<template>
    <div class="flex flex-col gap-2">
        <BreedSearch />
        <BreedDetails />
    </div>
</template>
<script setup lang="ts">
    import BreedDetails from './BreedDetails.vue';
    import BreedSearch from './BreedSearch.vue';
</script>

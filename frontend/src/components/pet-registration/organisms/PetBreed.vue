<template>
    <PetBreedField v-model="breed" @clear="$emit('clear:breed')" @fill="$emit('fill:breed')" />
    <PetOtherBreed
        class="flex flex-col gap-4 px-8"
        v-model:other-breed-option="otherBreedOption"
        v-model:breed-mix="breedMix"
        @click:mix="$emit('click:mix')"
        @click:unknown="$emit('click:unknown')"
    />
</template>

<script setup lang="ts">
    import PetBreedField from '../molecules/PetBreedField.vue';
    import PetOtherBreed from './PetOtherBreed.vue';

    defineEmits<{
        (e: 'clear:breed'): void;
        (e: 'fill:breed'): void;
        (e: 'click:mix'): void;
        (e: 'click:unknown'): void;
    }>();

    const breed = defineModel<string | undefined>('breed');
    const breedMix = defineModel<string>('breedMix');
    const otherBreedOption = defineModel<'unknown' | 'mix' | undefined>('otherBreedOption');
</script>

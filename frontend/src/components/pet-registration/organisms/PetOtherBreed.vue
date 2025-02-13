<template>
    <div>
        <PetOtherBreedOptions
            v-model="otherBreedOption"
            @click:mix="$emit('click:mix')"
            @click:unknown="$emit('click:unknown')"
        />
        <TextControl v-model="breedMix" :disabled="isBreedMixControlDisabled" />
    </div>
</template>

<script setup lang="ts">
    import TextControl from '@/components/pet-registration/atoms/TextControl.vue';
    import PetOtherBreedOptions from '../molecules/PetOtherBreedOptions.vue';
    import { computed } from 'vue';

    defineEmits<{
        (e: 'click:mix'): void;
        (e: 'click:unknown'): void;
    }>();

    const breedMix = defineModel<string>('breedMix');

    const otherBreedOption = defineModel<'unknown' | 'mix' | undefined>('otherBreedOption');

    const isBreedMixControlDisabled = computed<boolean>((): boolean => {
        return otherBreedOption.value !== 'mix';
    });
</script>

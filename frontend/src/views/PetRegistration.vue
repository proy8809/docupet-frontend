<template>
    <PetRegistrationForm v-if="petSummary === undefined" @submit="handleFormSubmitted" />
    <PetRegistrationSummary v-else :pet-summary="petSummary" @click:clear="handleSummaryCleared" />
</template>
<script setup lang="ts">
    import { usePetFormState } from '@/stores/usePetFormState';
    import PetRegistrationForm from './sections/PetRegistrationForm.vue';
    import { useRoute } from 'vue-router';
    import { PetSummary } from '@/stores/usePetFormState.defs';
    import { ref } from 'vue';
    import PetRegistrationSummary from './sections/PetRegistrationSummary.vue';

    const route = useRoute();

    const { savePet, clearPet } = usePetFormState();

    const petSummary = ref<PetSummary | undefined>();

    async function handleFormSubmitted(): Promise<void> {
        petSummary.value = await savePet(route.params.petType as 'cat' | 'dog');
        clearPet();
    }

    function handleSummaryCleared(): void {
        petSummary.value = undefined;
    }
</script>

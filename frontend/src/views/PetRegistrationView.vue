<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100 pet-registration-form">
        <Card class="w-full max-w-md p-6 shadow-md bg-white rounded-lg">
            <template #content>
                <div class="flex flex-col gap-4">
                    <h2 class="text-xl font-semibold text-primary-800">Tell us about your dog</h2>

                    <PetName />
                    <BreedSelection />
                    <GenderSelection />
                    <DateOfBirthSelection />

                    <div class="text-center my-4">
                        <Button label="Continue" severity="primary" class="w-3/4 rounded-lg" />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>
<script setup lang="ts">
    import BreedSelection from '@/components/PetRegistrationView/BreedSelection.vue';
    import DateOfBirthSelection from '@/components/PetRegistrationView/DateOfBirthSelection.vue';
    import GenderSelection from '@/components/PetRegistrationView/GenderSelection.vue';
    import PetName from '@/components/PetRegistrationView/PetName.vue';
    import { usePetCharacteristics } from '@/stores/usePetCharacteristics';
    import { Card, Button } from 'primevue';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const { loadPetBreeds } = usePetCharacteristics();

    onMounted(async () => {
        await loadPetBreeds(route.params.petType as string);
    });
</script>

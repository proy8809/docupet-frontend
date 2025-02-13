<template>
    <PetRegistrationCard title="Tell us about your dog">
        <template #content>
            <PetNameField v-model="name" />
            <PetBreed
                v-model:breed="breed"
                v-model:breed-mix="breedMix"
                v-model:other-breed-option="otherBreedOption"
                @clear:breed="handleBreedCleared"
                @fill:breed="handleBreedFilled"
                @click:mix="handleBreedMixClicked"
                @click:unknown="handleBreedUnknownClicked"
            />
            <PetGenderField v-model="gender" />
            <PetBirthday v-model:date-of-birth="dateOfBirth" v-model:estimated-age="estimatedAge" />
        </template>
        <template #footer>
            <ButtonControl :disabled="isFormStateValid === false" label="Continue" />
        </template>
    </PetRegistrationCard>
</template>
<script setup lang="ts">
    import { usePetCharacteristics } from '@/stores/usePetCharacteristics';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import PetRegistrationCard from '@/components/pet-registration/templates/PetRegistrationCard.vue';
    import { usePetFormState } from '@/stores/usePetFormState';
    import { storeToRefs } from 'pinia';
    import PetNameField from '@/components/pet-registration/molecules/PetNameField.vue';
    import PetBreed from '@/components/pet-registration/organisms/PetBreed.vue';
    import PetGenderField from '@/components/pet-registration/molecules/PetGenderField.vue';
    import PetBirthday from '@/components/pet-registration/organisms/PetBirthday.vue';
    import ButtonControl from '@/components/pet-registration/atoms/ButtonControl.vue';

    const route = useRoute();

    const { loadPetBreeds } = usePetCharacteristics();
    const { name, gender, dateOfBirth, estimatedAge, breed, breedMix, otherBreedOption, isFormStateValid } =
        storeToRefs(usePetFormState());

    function handleBreedMixClicked(): void {
        breed.value = undefined;
    }

    function handleBreedUnknownClicked(): void {
        breed.value = undefined;
        breedMix.value = '';
    }

    function handleBreedCleared(): void {
        otherBreedOption.value = 'unknown';
        breedMix.value = '';
    }

    function handleBreedFilled(): void {
        otherBreedOption.value = undefined;
        breedMix.value = '';
    }

    onMounted(async () => {
        await loadPetBreeds(route.params.petType as string);
    });
</script>

<template>
    <PetBirthdateKnowledge v-model="isDateOfBirthKnown" />

    <PetBirthdateField v-if="isDateOfBirthKnown" v-model="dateOfBirth" />
    <PetEstimatedAgeField v-else v-model="estimatedAge" :min="1" :max="20" />
</template>
<script setup lang="ts">
    import { ref, watch } from 'vue';
    import PetBirthdateField from '../molecules/PetBirthdateField.vue';
    import PetBirthdateKnowledge from '../molecules/PetBirthdateKnowledge.vue';
    import PetEstimatedAgeField from '../molecules/PetEstimatedAgeField.vue';

    const isDateOfBirthKnown = ref<boolean>(false);
    const dateOfBirth = defineModel<Date>('dateOfBirth');
    const estimatedAge = defineModel<number>('estimatedAge');

    watch(
        (): boolean => isDateOfBirthKnown.value,
        (isDateOfBirthKnown: boolean) => {
            if (isDateOfBirthKnown === false) {
                estimatedAge.value = 1;
                dateOfBirth.value = undefined;
            } else {
                estimatedAge.value = undefined;
                dateOfBirth.value = new Date();
            }
        }
    );
</script>

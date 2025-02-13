<template>
    <PetBirthdateKnowledge
        v-model="isDateOfBirthKnown"
        @click:birthdate-known="$emit('click:birthdate-known')"
        @click:birthdate-unknown="$emit('click:birthdate-unknown')"
    />

    <PetBirthdateField v-if="isDateOfBirthKnown" v-model="dateOfBirth" />
    <PetEstimatedAgeField v-else v-model="estimatedAge" />
</template>
<script setup lang="ts">
    import { ref, watch } from 'vue';
    import PetBirthdateField from '../molecules/PetBirthdateField.vue';
    import PetBirthdateKnowledge from '../molecules/PetBirthdateKnowledge.vue';
    import PetEstimatedAgeField from '../molecules/PetEstimatedAgeField.vue';

    defineEmits<{
        (e: 'click:birthdate-known'): void;
        (e: 'click:birthdate-unknown'): void;
    }>();

    const isDateOfBirthKnown = ref<boolean>(false);
    const dateOfBirth = defineModel<Date>('dateOfBirth');
    const estimatedAge = defineModel<number>('estimatedAge');
</script>

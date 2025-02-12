<template>
    <div class="flex flex-col gap-1">
        <label class="block text-gray-700 font-medium mb-1">What gender are they?</label>
        <SelectButton
            :options="translatedPetGenders"
            :allow-empty="false"
            option-label="label"
            option-value="value"
            class="gender-select-button"
            v-model="gender"
        />
    </div>
</template>

<script setup lang="ts">
    import { usePetCharacteristics } from '@/stores/usePetCharacteristics';
    import { TranslatedPetCharacteristic } from '@/stores/usePetCharacteristics.defs';
    import { usePetFormState } from '@/stores/usePetFormState';
    import { storeToRefs } from 'pinia';
    import { SelectButton } from 'primevue';
    import { computed } from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const { gender } = storeToRefs(usePetFormState());
    const { petGenders } = storeToRefs(usePetCharacteristics());

    const translatedPetGenders = computed<TranslatedPetCharacteristic[]>(() => {
        return petGenders.value.map((petGender: string) => ({
            value: petGender,
            label: t(`domain.genders.${petGender}`)
        }));
    });
</script>

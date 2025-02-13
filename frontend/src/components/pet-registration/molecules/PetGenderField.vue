<template>
    <WithLabel label="What gender are they?">
        <SwitchControl :options="translatedPetGenders" v-model="modelValue" />
    </WithLabel>
</template>
<script setup lang="ts">
    import SwitchControl from '@/components/pet-registration/atoms/SwitchControl.vue';
    import WithLabel from '@/components/pet-registration/wrappers/WithLabel.vue';
    import { usePetCharacteristics } from '@/stores/usePetCharacteristics';
    import { TranslatedOption } from '@/utils/General.defs';
    import { storeToRefs } from 'pinia';
    import { computed } from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const modelValue = defineModel<'m' | 'f'>('modelValue');

    const { petGenders } = storeToRefs(usePetCharacteristics());

    const translatedPetGenders = computed<TranslatedOption[]>(() => {
        return petGenders.value.map((petGender: string) => ({
            value: petGender,
            label: t(`domain.genders.${petGender}`)
        }));
    });
</script>

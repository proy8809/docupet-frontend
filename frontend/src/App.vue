<template>
    <header></header>

    {{ translatedPetTypes }}
    <RouterView />
</template>

<script setup lang="ts">
    import { computed, onMounted } from 'vue';
    import { usePetCharacteristics } from './stores/usePetCharacteristics';
    import { storeToRefs } from 'pinia';
    import { TranslatedPetCharacteristic } from './stores/usePetCharacteristics.defs';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const { petTypes } = storeToRefs(usePetCharacteristics());
    const { loadPetTypes } = usePetCharacteristics();

    const translatedPetTypes = computed<TranslatedPetCharacteristic[]>(() => {
        return petTypes.value.map((petType: string) => ({ value: petType, label: t(`domain.types.${petType}`) }));
    });

    onMounted(async () => {
        await loadPetTypes();
    });
</script>

<template>
    <header></header>
    <RouterView />
</template>

<script setup lang="ts">
    import { computed, onMounted } from 'vue';
    import { usePetCharacteristics } from './stores/usePetCharacteristics';
    import { storeToRefs } from 'pinia';
    import { useI18n } from 'vue-i18n';
    import { TranslatedOption } from './utils/General.defs';

    const { t } = useI18n();

    const { petTypes } = storeToRefs(usePetCharacteristics());
    const { loadPetTypes } = usePetCharacteristics();

    const translatedPetTypes = computed<TranslatedOption[]>(() => {
        return petTypes.value.map((petType: string) => ({ value: petType, label: t(`domain.types.${petType}`) }));
    });

    onMounted(async () => {
        await loadPetTypes();
    });
</script>

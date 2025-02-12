<template>
    <div class="flex flex-col gap-1">
        <label class="block text-gray-700 font-medium">What breed are they?</label>

        <Select
            :model-value="breed"
            :options="translatedPetBreeds"
            option-value="value"
            option-label="label"
            placeholder="Can't find it?"
            @update:model-value="handleBreedUpdated"
            filter
            show-clear
        >
            <template #dropdownicon>
                <i class="pi pi-search" />
            </template>
        </Select>
    </div>
</template>
<script setup lang="ts">
    import { usePetCharacteristics } from '@/stores/usePetCharacteristics';
    import { TranslatedPetCharacteristic } from '@/stores/usePetCharacteristics.defs';
    import { usePetFormState } from '@/stores/usePetFormState';
    import { storeToRefs } from 'pinia';
    import { Select } from 'primevue';
    import { computed } from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const { petBreeds } = storeToRefs(usePetCharacteristics());
    const { breed } = storeToRefs(usePetFormState());

    const translatedPetBreeds = computed<TranslatedPetCharacteristic[]>(() => {
        return petBreeds.value.map((petBreed: string) => ({ value: petBreed, label: t(`domain.breeds.${petBreed}`) }));
    });

    function handleBreedUpdated(updatedBreed: string | null): void {
        breed.value = updatedBreed || undefined;
    }
</script>

<template>
    <WithLabel :label="t('ui.pet_form.labels.breed')">
        <SearchControl
            v-model="modelValue"
            :placeholder="t('ui.pet_form.placeholders.cant_find')"
            :options="translatedBreeds"
            @fill="$emit('fill')"
            @clear="$emit('clear')"
        />
    </WithLabel>
</template>

<script setup lang="ts">
    import SearchControl from '@/components/pet-registration/atoms/SearchControl.vue';
    import WithLabel from '@/components/pet-registration/wrappers/WithLabel.vue';
    import { usePetCharacteristics } from '@/stores/usePetCharacteristics';
    import { TranslatedOption } from '@/utils/General.defs';
    import { storeToRefs } from 'pinia';
    import { computed } from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    defineEmits<{
        (e: 'fill'): void;
        (e: 'clear'): void;
    }>();

    const modelValue = defineModel<string | undefined>('modelValue');

    const { petBreeds } = storeToRefs(usePetCharacteristics());

    const translatedBreeds = computed<TranslatedOption[]>(() => {
        return petBreeds.value.map((petBreed: string) => ({
            value: petBreed,
            label: t(`domain.breeds.${petBreed}`)
        }));
    });
</script>

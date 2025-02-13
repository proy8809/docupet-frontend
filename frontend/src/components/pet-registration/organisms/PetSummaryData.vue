<template>
    <table class="w-full border-collapse border border-surface-300">
        <tbody>
            <tr class="summary-row">
                <td class="label">{{ t(`ui.dog_registered.name`) }}</td>
                <td class="value">{{ $props.petSummary.name }}</td>
            </tr>
            <tr class="summary-row">
                <td class="label">{{ t(`ui.dog_registered.type`) }}</td>
                <td class="value capitalize">
                    {{ t(`domain.types.${$props.petSummary.type}`) }}
                </td>
            </tr>
            <tr class="summary-row">
                <td class="label">{{ t(`ui.dog_registered.breed`) }}</td>
                <td class="value">
                    {{ t(`domain.breeds.${$props.petSummary.breed}`) }}
                </td>
            </tr>
            <tr class="summary-row">
                <td class="label">{{ t(`ui.dog_registered.gender`) }}</td>
                <td class="value">
                    {{ t(`domain.genders.${$props.petSummary.gender}`) }}
                </td>
            </tr>
            <tr class="summary-row">
                <td class="label">{{ t(`ui.dog_registered.age`) }}</td>
                <td class="value">
                    {{ t('domain.age', $props.petSummary.age) }}
                </td>
            </tr>
        </tbody>
    </table>

    <div
        class="p-4 text-white font-bold bg-red-600 border-danger rounded-md shadow-md border"
        v-if="$props.petSummary.is_dangerous"
    >
        {{
            t('ui.dog_registered.warning', {
                name: $props.petSummary.name,
                breed: t(`domain.breeds.${$props.petSummary.breed}`)
            })
        }}
    </div>
</template>
<script setup lang="ts">
    import { PetSummary } from '@/stores/usePetFormState.defs';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    defineProps<{
        petSummary: PetSummary;
    }>();
</script>
<style lang="css" scoped>
    .summary-row:not(:last-child) {
        @apply border-b border-surface-200;
    }

    .summary-row:nth-child(odd) {
        @apply bg-surface-50;
    }

    .summary-row > .label {
        @apply w-1/2 p-2 font-semibold;
    }

    .summary-row > .value {
        @apply w-1/2 p-2;
    }
</style>

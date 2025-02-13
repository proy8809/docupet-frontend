<template>
    <table class="pet-summary-table">
        <tbody>
            <tr>
                <td class="label">{{ t(`ui.pet_registered.name`) }}</td>
                <td class="value">{{ $props.petSummary.name }}</td>
            </tr>
            <tr>
                <td class="label">{{ t(`ui.pet_registered.type`) }}</td>
                <td class="value capitalize">
                    {{ t(`domain.types.${$props.petSummary.type}`) }}
                </td>
            </tr>
            <tr>
                <td class="label">{{ t(`ui.pet_registered.breed`) }}</td>
                <td class="value">
                    {{ breed }}
                </td>
            </tr>
            <tr>
                <td class="label">{{ t(`ui.pet_registered.gender`) }}</td>
                <td class="value">
                    {{ t(`domain.genders.${$props.petSummary.gender}`) }}
                </td>
            </tr>
            <tr>
                <td class="label">{{ t(`ui.pet_registered.age`) }}</td>
                <td class="value">
                    {{ t('domain.age', $props.petSummary.age) }}
                </td>
            </tr>
        </tbody>
    </table>

    <div class="pet-summary-warning" v-if="$props.petSummary.is_dangerous">
        {{
            t('ui.pet_registered.warning', {
                name: $props.petSummary.name,
                breed: t(`domain.breeds.${$props.petSummary.breed}`)
            })
        }}
    </div>
</template>

<script setup lang="ts">
    import { PetSummary } from '@/stores/usePetFormState.defs';
    import { computed } from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const props = defineProps<{
        petSummary: PetSummary;
    }>();

    const breed = computed<string>(() => {
        if (props.petSummary.breed !== null) {
            return t(`domain.breeds.${props.petSummary.breed}`);
        }

        if (props.petSummary.breed_mix !== '') {
            return props.petSummary.breed_mix;
        }

        return t(`ui.pet_registered.unknown_breed`);
    });
</script>

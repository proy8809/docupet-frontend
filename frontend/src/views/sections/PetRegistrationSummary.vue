<template>
    <PetRegistrationCard
        :title="
            t('ui.pet_registered.title', {
                type: t(`domain.types.${route.params.petType}`)
            })
        "
    >
        <template #content>
            <PetSummaryData :petSummary="$props.petSummary" />
        </template>
        <template #footer>
            <ButtonControl
                :label="t('ui.pet_registered.register_another_one')"
                @click="$emit('click:clear')"
            />
        </template>
    </PetRegistrationCard>
</template>
<script setup lang="ts">
    import ButtonControl from '@/components/pet-registration/atoms/ButtonControl.vue';
    import PetSummaryData from '@/components/pet-registration/organisms/PetSummaryData.vue';
    import PetRegistrationCard from '@/views/layouts/PetRegistrationCard.vue';
    import { PetSummary } from '@/stores/usePetFormState.defs';
    import { useI18n } from 'vue-i18n';
    import { useRoute } from 'vue-router';

    const { t } = useI18n();
    const route = useRoute();

    defineEmits<{
        (e: 'click:clear'): void;
    }>();

    defineProps<{
        petSummary: PetSummary;
    }>();
</script>

<template>
    <PetRegistrationCard title="Your dog has been successfully registered!">
        <template #content>
            <PetSummaryData :petSummary="$props.petSummary" />
        </template>
        <template #footer>
            <ButtonControl
                :label="t('ui.dog_registered.register_another_one')"
                @click="$emit('click:clear')"
            />
        </template>
    </PetRegistrationCard>
</template>
<script setup lang="ts">
    import ButtonControl from '@/components/pet-registration/atoms/ButtonControl.vue';
    import PetSummaryData from '@/components/pet-registration/organisms/PetSummaryData.vue';
    import PetRegistrationCard from '@/components/pet-registration/templates/PetRegistrationCard.vue';
    import { PetSummary } from '@/stores/usePetFormState.defs';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    defineEmits<{
        (e: 'click:clear'): void;
    }>();

    defineProps<{
        petSummary: PetSummary;
    }>();
</script>

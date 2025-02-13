<template>
    <Toast />
    <PetRegistrationForm v-if="petSummary === undefined" @submit="handleFormSubmitted" />
    <PetRegistrationSummary
        v-else
        :pet-summary="petSummary"
        @click:register-another-one="registerAnotherOneClicked"
    />
</template>
<script setup lang="ts">
    import { usePetFormState } from '@/stores/usePetFormState';
    import PetRegistrationForm from './sections/PetRegistrationForm.vue';
    import { useRoute, useRouter } from 'vue-router';
    import { PetSummary } from '@/stores/usePetFormState.defs';
    import { ref } from 'vue';
    import PetRegistrationSummary from './sections/PetRegistrationSummary.vue';
    import { Toast, useToast } from 'primevue';
    import { useI18n } from 'vue-i18n';

    const route = useRoute();
    const router = useRouter();
    const toast = useToast();
    const { t } = useI18n();

    const { savePet, clearPet } = usePetFormState();

    const petSummary = ref<PetSummary | undefined>();

    async function handleFormSubmitted(): Promise<void> {
        try {
            petSummary.value = await savePet(route.params.petType as 'cat' | 'dog');
            clearPet();
        } catch (err: any) {
            toast.add({
                severity: 'error',
                summary: t('general.toast.error'),
                detail: t(err.message)
            });
        }
    }

    function registerAnotherOneClicked(): void {
        router.push({ name: 'index' });
    }
</script>

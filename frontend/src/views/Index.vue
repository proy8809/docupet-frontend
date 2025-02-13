<template>
    <PetRegistrationCard
        :title="t('ui.index.title')"
        title-classes="text-center"
        content-classes="flex items-center"
    >
        <template #content>
            <PetCatSvg class="w-48 h-48 p-4 cursor-pointer" @click="handleCatClicked" />
            <PetDogSvg class="w-48 h-48 p-4 cursor-pointer" @click="handleDogClicked" />
        </template>
    </PetRegistrationCard>
</template>
<script setup lang="ts">
    import PetCatSvg from '@/components/index/atoms/PetCatSvg.vue';
    import PetDogSvg from '@/components/index/atoms/PetDogSvg.vue';
    import PetRegistrationCard from './layouts/PetRegistrationCard.vue';
    import { useNavigation } from '@/utils/useNavigation';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const { navigateToRoute } = useNavigation();

    function handleCatClicked(): void {
        navigateToRoute('pet_registration', { petType: 'cat' });
    }

    function handleDogClicked(): void {
        navigateToRoute('pet_registration', { petType: 'dog' });
    }
</script>

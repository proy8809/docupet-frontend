<template>
    <WithLabel :label="t('ui.pet_form.labels.know_birthdate')">
        <SwitchControl :options="birthdateKnowledgeOptions" v-model="modelValue" />
    </WithLabel>
</template>
<script setup lang="ts">
    import SwitchControl from '@/components/pet-registration/atoms/SwitchControl.vue';
    import WithLabel from '@/components/pet-registration/wrappers/WithLabel.vue';
    import { TranslatedOption } from '@/utils/General.defs';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const birthdateKnowledgeOptions: TranslatedOption[] = [
        { value: true, label: t('general.yes') },
        { value: false, label: t('general.no') }
    ];

    const modelValue = defineModel<boolean>('modelValue');
</script>

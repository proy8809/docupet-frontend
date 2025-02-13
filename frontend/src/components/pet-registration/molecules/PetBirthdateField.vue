<template>
    <WithLabel :label="t('ui.pet_form.labels.birthdate')">
        <DateControl v-model="modelValue" />
    </WithLabel>
</template>
<script setup lang="ts">
    import DateControl from '@/components/pet-registration/atoms/DateControl.vue';
    import WithLabel from '@/components/pet-registration/wrappers/WithLabel.vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const modelValue = defineModel<Date | undefined>('modelValue');
</script>

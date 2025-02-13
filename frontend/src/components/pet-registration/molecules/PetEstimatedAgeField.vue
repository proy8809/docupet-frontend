<template>
    <WithLabel :label="t('ui.pet_form.labels.approximate_age')">
        <NumberControl v-model="modelValue" :min="1" :max="20" />
    </WithLabel>
</template>
<script setup lang="ts">
    import NumberControl from '@/components/pet-registration/atoms/NumberControl.vue';
    import WithLabel from '@/components/pet-registration/wrappers/WithLabel.vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const modelValue = defineModel<number | undefined>('modelValue');
</script>

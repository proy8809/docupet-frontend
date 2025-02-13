<template>
    <WithLabel :label="t('ui.pet_form.labels.approximate_age')">
        <NumberControl v-model="modelValue" :min="$props.min" :max="$props.max" />
    </WithLabel>
</template>
<script setup lang="ts">
    import NumberControl from '@/components/pet-registration/atoms/NumberControl.vue';
    import WithLabel from '@/components/pet-registration/wrappers/WithLabel.vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    defineProps<{
        min?: number;
        max?: number;
    }>();

    const modelValue = defineModel<number | undefined>('modelValue');
</script>

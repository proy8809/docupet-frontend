<template>
    <WithLabel
        :label="
            t('ui.pet_form.labels.name', {
                type: t(`domain.types.${route.params.petType as string}`)
            })
        "
    >
        <TextControl v-model="modelValue" />
    </WithLabel>
</template>

<script setup lang="ts">
    import TextControl from '@/components/pet-registration/atoms/TextControl.vue';
    import WithLabel from '@/components/pet-registration/wrappers/WithLabel.vue';
    import { useI18n } from 'vue-i18n';
    import { useRoute } from 'vue-router';

    const { t } = useI18n();
    const route = useRoute();

    const modelValue = defineModel<string | undefined>('modelValue');
</script>

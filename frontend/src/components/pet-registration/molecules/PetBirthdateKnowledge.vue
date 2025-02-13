<template>
    <WithLabel :label="t('ui.pet_form.labels.know_birthdate')">
        <SwitchControl
            :options="birthdateKnowledgeOptions"
            v-model="modelValue"
            @update:model-value="handleBirthdateKnowledgeChanged"
        />
    </WithLabel>
</template>
<script setup lang="ts">
    import SwitchControl from '@/components/pet-registration/atoms/SwitchControl.vue';
    import WithLabel from '@/components/pet-registration/wrappers/WithLabel.vue';
    import { TranslatedOption } from '@/utils/General.defs';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const emit = defineEmits<{
        (e: 'click:birthdate-known'): void;
        (e: 'click:birthdate-unknown'): void;
    }>();

    const birthdateKnowledgeOptions: TranslatedOption[] = [
        { value: true, label: t('general.yes') },
        { value: false, label: t('general.no') }
    ];

    const modelValue = defineModel<boolean>('modelValue');

    function handleBirthdateKnowledgeChanged(value: string | number | boolean | undefined): void {
        switch (value) {
            case true:
                emit('click:birthdate-known');
                break;
            case false:
                emit('click:birthdate-unknown');
                break;
        }
    }
</script>

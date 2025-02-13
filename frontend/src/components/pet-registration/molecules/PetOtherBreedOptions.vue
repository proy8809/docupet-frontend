<template>
    <WithLabel class="flex flex-col gap-4" :label="t('ui.pet_form.labels.choose')">
        <RadioControl
            name="other-pet-breed"
            value="unknown"
            :label="t('ui.pet_form.labels.unknown')"
            v-model="modelValue"
            @click="$emit('click:unknown')"
        />
        <RadioControl
            name="other-pet-breed"
            value="mix"
            :label="t('ui.pet_form.labels.mix')"
            v-model="modelValue"
            @click="$emit('click:mix')"
        />
    </WithLabel>
</template>
<script setup lang="ts">
    import RadioControl from '@/components/pet-registration/atoms/RadioControl.vue';
    import WithLabel from '@/components/pet-registration/wrappers/WithLabel.vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    defineEmits<{
        (e: 'click:unknown'): void;
        (e: 'click:mix'): void;
    }>();

    type OtherBreed = 'unknown' | 'mix';

    const modelValue = defineModel<OtherBreed>('modelValue');
</script>

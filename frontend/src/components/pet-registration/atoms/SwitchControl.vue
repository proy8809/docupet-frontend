<template>
    <SelectButton
        :options="$props.options"
        :allow-empty="false"
        option-label="label"
        option-value="value"
        class="switch-control"
        v-model="modelValue"
    />
</template>
<script setup lang="ts">
    import { TranslatedOption } from '@/utils/General.defs';
    import { SelectButton } from 'primevue';

    defineProps<{
        options: TranslatedOption[];
    }>();

    const modelValue = defineModel<TranslatedOption['value'] | undefined>('modelValue');
</script>

<template>
    <InputNumber
        v-model="modelValue"
        :min="$props.min"
        :max="$props.max"
        @update:model-value="handleModelValueUpdated"
        show-buttons
    />
</template>
<script setup lang="ts">
    import { InputNumber } from 'primevue';

    defineProps<{
        min?: number;
        max?: number;
    }>();

    const modelValue = defineModel<number | undefined>('modelValue');

    function handleModelValueUpdated(updatedValue: number | null): void {
        modelValue.value = updatedValue || undefined;
    }
</script>

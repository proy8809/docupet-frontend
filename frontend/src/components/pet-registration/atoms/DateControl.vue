<template>
    <DatePicker
        icon-display="input"
        date-format="yy-mm-dd"
        v-model="modelValue"
        @update:model-value="handleModelValueUpdated"
        show-icon
    />
</template>

<script setup lang="ts">
    import { DatePicker } from 'primevue';

    type DatePickerEmittedValue = Date | Date[] | (Date | null)[] | undefined | null;

    const modelValue = defineModel<DatePickerEmittedValue>('modelValue');

    function handleModelValueUpdated(updatedValue: DatePickerEmittedValue): void {
        modelValue.value = updatedValue || undefined;
    }
</script>

<template>
    <Select
        :model-value="modelValue"
        :options="$props.options"
        :placeholder="$props.placeholder"
        option-value="value"
        option-label="label"
        @update:model-value="handleModelValueUpdated($event || undefined)"
        filter
        show-clear
    >
        <template #dropdownicon>
            <i class="pi pi-search" />
        </template>
    </Select>
</template>

<script setup lang="ts">
    import { TranslatedOption } from '@/utils/General.defs';
    import { Select } from 'primevue';

    const emit = defineEmits<{
        (e: 'fill'): void;
        (e: 'clear'): void;
    }>();

    defineProps<{
        options: TranslatedOption[];
        placeholder?: string;
    }>();

    const modelValue = defineModel<string | undefined>('modelValue');

    function handleModelValueUpdated(updatedValue: string | undefined): void {
        modelValue.value = updatedValue;

        if (updatedValue === undefined) {
            emit('clear');
        } else {
            emit('fill');
        }
    }
</script>

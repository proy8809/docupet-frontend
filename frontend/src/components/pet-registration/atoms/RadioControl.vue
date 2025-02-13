<template>
    <label class="flex gap-2">
        <RadioButton
            :name="$props.name"
            :value="$props.value"
            size="large"
            v-model="modelValue"
            @click="handleRadioButtonClicked"
        />
        <span @click="handleRadioButtonClicked">{{ $props.label }}</span>
    </label>
</template>
<script setup lang="ts">
    import { RadioButton } from 'primevue';

    defineProps<{
        name: string;
        value: string;
        label: string;
    }>();

    const emit = defineEmits<{
        (e: 'click'): void;
    }>();

    const modelValue = defineModel<string | undefined>('modelValue');

    function handleRadioButtonClicked(): void {
        emit('click');
    }
</script>

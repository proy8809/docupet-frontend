<template>
    <InputText v-model="modelValue" :disabled="$props.disabled" />
</template>
<script setup lang="ts">
    import { InputText } from 'primevue';

    withDefaults(
        defineProps<{
            disabled?: boolean;
        }>(),
        {
            disabled: false
        }
    );

    const modelValue = defineModel<string | undefined>('modelValue');
</script>

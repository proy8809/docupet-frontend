<template>
    <Button :disabled="$props.disabled" :label="$props.label" severity="primary" class="w-3/4 rounded-lg" />
</template>
<script setup lang="ts">
    import { Button } from 'primevue';

    withDefaults(
        defineProps<{
            disabled?: boolean;
            label: string;
        }>(),
        {
            disabled: false
        }
    );
</script>

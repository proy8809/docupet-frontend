<template>
    <div class="flex flex-col gap-1">
        <label class="block text-gray-700 font-medium">{{ $props.label }}</label>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
    defineProps<{
        label: string;
    }>();
</script>

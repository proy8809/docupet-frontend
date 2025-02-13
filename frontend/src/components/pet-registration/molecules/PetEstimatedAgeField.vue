<template>
    <WithLabel label="Approximate Age">
        <NumberControl v-model="modelValue" :min="$props.min" :max="$props.max" />
    </WithLabel>
</template>
<script setup lang="ts">
    import NumberControl from '@/components/pet-registration/atoms/NumberControl.vue';
    import WithLabel from '@/components/pet-registration/wrappers/WithLabel.vue';

    defineProps<{
        min?: number;
        max?: number;
    }>();

    const modelValue = defineModel<number | undefined>('modelValue');
</script>

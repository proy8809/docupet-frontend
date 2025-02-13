<template>
    <WithLabel label="What is your dog's name?">
        <TextControl v-model="modelValue" />
    </WithLabel>
</template>

<script setup lang="ts">
    import TextControl from '@/components/pet-registration/atoms/TextControl.vue';
    import WithLabel from '@/components/pet-registration/wrappers/WithLabel.vue';

    const modelValue = defineModel<string | undefined>('modelValue');
</script>

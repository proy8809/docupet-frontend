<template>
    <WithLabel label="Birthdate">
        <DateControl v-model="modelValue" />
    </WithLabel>
</template>
<script setup lang="ts">
    import DateControl from '@/components/pet-registration/atoms/DateControl.vue';
    import WithLabel from '@/components/pet-registration/wrappers/WithLabel.vue';

    const modelValue = defineModel<Date | undefined>('modelValue');
</script>

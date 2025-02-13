<template>
    <WithLabel class="flex flex-col gap-4" label="Choose One">
        <RadioControl
            name="other-pet-breed"
            value="unknown"
            label="I don't know"
            v-model="modelValue"
            @click="$emit('click:unknown')"
        />
        <RadioControl
            name="other-pet-breed"
            value="mix"
            label="It's a mix"
            v-model="modelValue"
            @click="$emit('click:mix')"
        />
    </WithLabel>
</template>
<script setup lang="ts">
    import RadioControl from '@/components/pet-registration/atoms/RadioControl.vue';
    import WithLabel from '@/components/pet-registration/wrappers/WithLabel.vue';

    defineEmits<{
        (e: 'click:unknown'): void;
        (e: 'click:mix'): void;
    }>();

    type OtherBreed = 'unknown' | 'mix';

    const modelValue = defineModel<OtherBreed>('modelValue');
</script>

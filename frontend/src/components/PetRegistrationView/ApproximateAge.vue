<template>
    <div class="flex flex-col gap-1">
        <label class="block text-gray-700 font-medium">Approximate Age</label>
        <InputNumber v-model="estimatedAge" :min="1" :max="20" show-buttons />
    </div>
</template>
<script setup lang="ts">
    import { usePetFormState } from '@/stores/usePetFormState';
    import { storeToRefs } from 'pinia';
    import { InputNumber } from 'primevue';

    const { estimatedAge } = storeToRefs(usePetFormState());
</script>

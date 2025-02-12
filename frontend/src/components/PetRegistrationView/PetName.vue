<template>
    <div class="flex flex-col gap-1">
        <label class="block text-gray-700 font-medium">What is your dog's name?</label>
        <InputText v-model="name" />
    </div>
</template>
<script setup lang="ts">
    import { usePetFormState } from '@/stores/usePetFormState';
    import { storeToRefs } from 'pinia';
    import { InputText } from 'primevue';

    const { name } = storeToRefs(usePetFormState());
</script>

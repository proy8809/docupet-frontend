<template>
    <div class="flex flex-col gap-1">
        <label class="block text-gray-700 font-medium">Birthdate</label>
        <DatePicker show-icon icon-display="input" date-format="yy-mm-dd" v-model="dateOfBirth" />
    </div>
</template>
<script setup lang="ts">
    import { usePetFormState } from '@/stores/usePetFormState';
    import { storeToRefs } from 'pinia';
    import { DatePicker } from 'primevue';

    const { dateOfBirth } = storeToRefs(usePetFormState());
</script>

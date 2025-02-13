<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100 pet-registration-form">
        <Card class="w-full max-w-lg p-6 shadow-md bg-white rounded-lg">
            <template #title>
                <h1 class="text-xl font-semibold text-primary-800">{{ $props.title }}</h1>
            </template>
            <template #content>
                <div class="flex flex-col gap-4 my-4">
                    <slot name="content"></slot>
                </div>

                <div class="text-center mt-12">
                    <slot name="footer"></slot>
                </div>
            </template>
        </Card>
    </div>
</template>
<script setup lang="ts">
    import { Card } from 'primevue';

    defineProps<{ title: string }>();
</script>

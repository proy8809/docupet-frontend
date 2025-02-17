<template>
    <Card
        class="max-w-lg px-6 bg-white border-none rounded-lg shadow-none md:shadow-md md:py-6 pet-registration"
    >
        <template #header>
            <DogPawHeader />
        </template>
        <template #title>
            <h1 class="text-xl font-semibold text-primary-800" :class="$props.titleClasses">
                {{ $props.title }}
            </h1>
        </template>
        <template #content>
            <div class="flex flex-col gap-4 my-4" :class="$props.contentClasses">
                <slot name="content"></slot>
            </div>

            <div class="text-center mt-6" v-if="!!$slots.footer">
                <slot name="footer"></slot>
            </div>
        </template>
    </Card>
</template>
<script setup lang="ts">
    import DogPawHeader from '@/components/shared/molecules/DogPawHeader.vue';
    import { useNavigation } from '@/utils/useNavigation';
    import { Card } from 'primevue';
    import { useI18n } from 'vue-i18n';

    withDefaults(
        defineProps<{
            title: string;
            titleClasses?: string;
            contentClasses?: string;
        }>(),
        { titleClasses: '', contentClasses: '' }
    );
</script>

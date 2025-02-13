<template>
    <Card
        class="w-full max-w-lg p-6 border-none shadow-none md:shadow-md md:rounded-lg bg-white pet-registration"
    >
        <template #title>
            <h1 class="text-xl font-semibold text-primary-800" :class="$props.titleClasses">
                {{ $props.title }}
            </h1>
        </template>
        <template #content>
            <div class="flex flex-col gap-4 my-4" :class="$props.contentClasses">
                <slot name="content"></slot>
            </div>

            <div class="text-center mt-12 mb-8" v-if="!!$slots.footer">
                <slot name="footer"></slot>
            </div>

            <div class="flex justify-end items-center gap-2">
                <a class="text-sm text-primary cursor-pointer" @click="navigateToRoute('index')">
                    {{ t('general.back_home') }}
                </a>

                <span>-</span>

                <a class="text-sm text-primary cursor-pointer" @click="switchLanguage">
                    {{ t('general.other_language') }}
                </a>
            </div>
        </template>
    </Card>
</template>
<script setup lang="ts">
    import { useNavigation } from '@/utils/useNavigation';
    import { Card } from 'primevue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    const { navigateToRoute, switchLanguage } = useNavigation();

    withDefaults(
        defineProps<{
            title: string;
            titleClasses?: string;
            contentClasses?: string;
        }>(),
        { titleClasses: '', contentClasses: '' }
    );
</script>

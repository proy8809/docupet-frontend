<template>
    <header class="p-4 bg-white relative flex justify-center items-center md:shadow-md md:mb-8">
        <img src="/logo.png" class="h-8" />
        <nav class="hidden text-sm right-8 absolute md:block">
            <ul class="flex gap-4">
                <li>
                    <a href="#" class="text-primary" @click="navigateToRoute('index')">
                        {{ t('general.back_home') }}
                    </a>
                </li>
                <li>
                    <a href="#" class="text-primary" @click="switchLanguage">
                        {{ t('general.other_language') }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    <main class="md:flex md:items-center md:justify-center">
        <RouterView />
    </main>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    import { useNavigation } from './utils/useNavigation';

    const { navigateToRoute, switchLanguage } = useNavigation();
    const { t } = useI18n();
</script>

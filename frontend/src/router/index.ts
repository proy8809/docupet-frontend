import { createRouter, createWebHistory } from 'vue-router';
import PetRegistration from '@/views/PetRegistration.vue';
import i18n from '@/i18n/index';
import Index from '@/views/Index.vue';

const currentLocale = i18n.global.locale.value;

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:locale(fr|en)/register/:petType(cat|dog)',
            name: 'pet_registration',
            meta: { title: 'general.title' },
            component: PetRegistration
        },
        { path: '/:pathMatch(.*)*', redirect: `/${currentLocale}` },
        {
            path: '/:locale(fr|en)',
            name: 'index',
            meta: { title: 'general.title' },

            component: Index
        }
    ]
});

router.beforeEach((to, from, next) => {
    const { locale } = to.params;

    i18n.global.locale.value = locale as 'en' | 'fr';

    document.title = i18n.global.t(to.meta.title as string);

    next();
});

export default router;

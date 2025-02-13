import { createRouter, createWebHistory } from 'vue-router';
import PetRegistration from '@/views/PetRegistration.vue';
import i18n from '@/i18n/index';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:locale(fr|en)/register/:petType(cat|dog)',
            name: 'pet_registration',
            component: PetRegistration
        }
    ]
});

router.beforeEach((to, from, next) => {
    const { locale } = to.params;

    i18n.global.locale.value = locale as 'en' | 'fr';

    next();
});

export default router;

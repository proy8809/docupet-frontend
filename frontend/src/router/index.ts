import { createRouter, createWebHistory } from 'vue-router';
import PetRegistration from '@/views/PetRegistration.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/register/:petType(cat|dog)',
            name: 'pet_registration',
            component: PetRegistration
        }
    ]
});

export default router;

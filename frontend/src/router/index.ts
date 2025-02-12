import { createRouter, createWebHistory } from 'vue-router';
import PetRegistrationView from '../views/PetRegistrationView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'pet_registration',
            component: PetRegistrationView
        }
    ]
});

export default router;

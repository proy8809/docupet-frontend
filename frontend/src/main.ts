import './assets/tailwind.css';
import './style.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import i18n from '@/i18n/index';

import PrimeVue from 'primevue/config';

import App from './App.vue';
import router from './router';

import { ToastService } from 'primevue';

const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue, { theme: 'none' });
app.use(ToastService);
app.use(i18n);
app.use(router);

app.mount('#app');

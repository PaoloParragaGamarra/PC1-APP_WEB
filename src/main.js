import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import i18n from './i18n.js';
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';

import Card             from 'primevue/card';
import Button           from 'primevue/button';
import Avatar           from 'primevue/avatar';
import Menu             from 'primevue/menu';
import MenuBar          from 'primevue/menubar';
import Toolbar          from 'primevue/toolbar';

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

createApp(App)
    .use(PrimeVue, { ripple: true})
    .component('pv-card',Card)
    .component('pv-button',Button)
    .component('pv-avatar',Avatar)
    .component('pv-menu',Menu)
    .component('pv-menu-bar',MenuBar)
    .component('pv-toolbar',Toolbar)
    .use(i18n)
    .mount('#app')

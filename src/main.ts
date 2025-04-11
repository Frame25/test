import { createApp } from 'vue';

import App from './App.vue';
import './assets/main.css';
import twMerge from './directives/tw-merge';

createApp(App).use(twMerge).mount('#app');

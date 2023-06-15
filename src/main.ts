import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

import './assets/styles/styles.scss';
import './assets/styles/elements.scss';
import './assets/styles/styles.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');

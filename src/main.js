import { createApp } from 'vue';
import App from './App.vue';
import './app.css';

/* components */

const app = createApp(App);

app.component('Navbar', Navbar);

app.mount('#app');

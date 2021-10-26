import { createApp } from 'vue'
import App from './App.vue'
import KwaiUI from '@ks/kwai-ui';
import '@ks/kwai-ui/lib/theme-new-era/index.css';
const app = createApp(App);
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
app.use(ElementPlus);
app.use(KwaiUI);
app.mount('#app');

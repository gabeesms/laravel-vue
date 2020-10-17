require('./bootstrap');

window.Vue = require('vue');
import { BootstrapVue } from 'bootstrap-vue'
import store from './store'

Vue.use(BootstrapVue)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('form-contato', require('./components/FormContato.vue').default);
Vue.component('table-contato', require('./components/TableContato.vue').default);

const app = new Vue({
    store,
    el: '#app',
});

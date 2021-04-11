// `~/src/main.js`

import Vue from 'vue'
import Noticias from '../../components/inicio/Noticias'
import PrismicVue from '@prismicio/vue'
import linkResolver from '../../src/link-resolver' // Atualize este caminho se necessário
// import shareIt from 'vue-share-it'
// import VueParticles from 'vue-particles'

// Vue.use(VueParticles)
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/snippet-\w*/];

// Vue.use(shareIt);


const accessToken = 'MC5ZRjFSTkJJQUFDRUFKNWxo.bjvvv73vv71aHe-_vTTvv71777-9PH7vv73vv71-77-9Ye-_ve-_ve-_vT4kCQkmATEz77-9Be-_vQ' // Deixe em branco se seu repo for público
const endpoint = 'https://imobanco.cdn.prismic.io/api/v2' // Use seu nome de repo

// Registrar plugin
Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { accessToken },
  linkResolver
})

// Crie uma instância Vue
new Vue({
  render: (h) => h(Noticias)
}).$mount('#app');
import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8ff58a1a = () => interopDefault(import('../pages/boletos/index.vue' /* webpackChunkName: "pages/boletos/index" */))
const _0fefe9e0 = () => interopDefault(import('../pages/charges/index.vue' /* webpackChunkName: "pages/charges/index" */))
const _6d64802d = () => interopDefault(import('../pages/cobrancas/index.vue' /* webpackChunkName: "pages/cobrancas/index" */))
const _7d3c3481 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _a69535be = () => interopDefault(import('../pages/ecommerce/index.vue' /* webpackChunkName: "pages/ecommerce/index" */))
const _057fe83d = () => interopDefault(import('../pages/pagador/index.vue' /* webpackChunkName: "pages/pagador/index" */))
const _26c099b0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/boletos",
    component: _8ff58a1a,
    name: "boletos"
  }, {
    path: "/charges",
    component: _0fefe9e0,
    name: "charges"
  }, {
    path: "/cobrancas",
    component: _6d64802d,
    name: "cobrancas"
  }, {
    path: "/contact",
    component: _7d3c3481,
    name: "contact"
  }, {
    path: "/ecommerce",
    component: _a69535be,
    name: "ecommerce"
  }, {
    path: "/pagador",
    component: _057fe83d,
    name: "pagador"
  }, {
    path: "/",
    component: _26c099b0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0cf9059e = () => interopDefault(import('../pages/boletos/index.vue' /* webpackChunkName: "pages/boletos/index" */))
const _5ba001a8 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _d83d9de8 = () => interopDefault(import('../pages/ecommerce/index.vue' /* webpackChunkName: "pages/ecommerce/index" */))
const _28733f5b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0cf9059e,
    name: "boletos"
  }, {
    path: "/contact",
    component: _5ba001a8,
    name: "contact"
  }, {
    path: "/ecommerce",
    component: _d83d9de8,
    name: "ecommerce"
  }, {
    path: "/",
    component: _28733f5b,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

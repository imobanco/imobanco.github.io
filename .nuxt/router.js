import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f99bb200 = () => interopDefault(import('../pages/boletos/index.vue' /* webpackChunkName: "pages/boletos/index" */))
const _4869208e = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _605781ee = () => interopDefault(import('../pages/ecommerce/index.vue' /* webpackChunkName: "pages/ecommerce/index" */))
const _9a663a86 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _f99bb200,
    name: "boletos"
  }, {
    path: "/contact",
    component: _4869208e,
    name: "contact"
  }, {
    path: "/ecommerce",
    component: _605781ee,
    name: "ecommerce"
  }, {
    path: "/",
    component: _9a663a86,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

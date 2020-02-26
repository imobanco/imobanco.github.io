<template>
    <section class="bg-secondary">
    <div class="container p-0">
      <div class="row">
        <div class="col-lg-12">
          <b-navbar toggleable="lg" class="bg-secondary">
              <router-link to="/" class="navbar-brand"><img src="~assets/image/logoimobanco.png" alt=""></router-link>
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
              <ul class="navbar-nav">
                      <a href=""><router-link to="/"><span class="imo-text-06 text-content pl-2 pr-2">Home</span></router-link></a>
                      <router-link to="/slip"><span class="imo-text-06 text-content pl-2 pr-2">Boleto</span></router-link>
                      <router-link to="/ecommerce"><span class="imo-text-06 text-content pl-2 pr-2">E-Commerce</span></router-link>
                      <router-link to="/charges"><span class="imo-text-06 text-content pl-2 pr-2 ">Cobranças</span></router-link>
                      <a href="https://blog.imobanco.com.br/" target="_blank"><span class="imo-text-06 text-content pl-2 pr-2">Blog</span></a>
                      <router-link to="/contact"><span class="imo-text-06 text-content pl-2 pr-2">Contato</span></router-link>
              </ul> 
              </b-navbar-nav>
              </b-collapse>
              </b-navbar>
      </div>
      </div>
    </div>
    </section>
  </template>
<style>

.color-gradient-login{
    /* background: rgb(4,95,170); */
    background-color:#212529;
    border-bottom: 2px solid rgb(4,95,170);
    }
</style>

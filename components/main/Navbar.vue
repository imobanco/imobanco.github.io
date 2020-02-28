<template>
    <section class="bg-info">
    <div class="container p-0">
      <div class="row">
        <div class="col-lg-12">
          <b-navbar toggleable="lg" class="bg-info">
              <router-link to="/" class="navbar-brand"><img src="~assets/image/logoimobanco.png" alt=""></router-link>
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
              <ul class="navbar-nav">
                  <router-link to="/" class="text-white text-content text-decoration-none effect">Home</router-link>
                  <hr class="linestyle">
                  <router-link to="/slip" class="text-white text-content text-decoration-none effect">Institucional</router-link>
                 <hr class="linestyle">
                  <router-link to="/slip" class="text-white text-content text-decoration-none effect">Soluções</router-link>
                  <hr class="linestyle">
                  <router-link to="/slip" class="text-white text-content text-decoration-none effect">Boleto</router-link>
                  <hr class="linestyle">
                  <router-link to="/ecommerce" class="text-white text-content text-decoration-none effect">E-Commerce</router-link>
                  <hr class="linestyle">
                  <router-link to="/charges" class="text-white text-content text-decoration-none effect">Cobranças</router-link>
                  <hr class="linestyle">
                  <router-link to="/charges" class="text-white text-content text-decoration-none effect">Webinar</router-link>
                  <hr class="linestyle">
                  <a href="https://blog.imobanco.com.br/" class="text-white text-content text-decoration-none effect" target="_blank">Blog</a>
                  <hr class="linestyle">
                  <router-link to="/contact" class="text-white text-content text-decoration-none effect">Contato</router-link>
              </ul> 
              </b-navbar-nav>
              </b-collapse>
              </b-navbar>
      </div>
      </div>
    </div>
    </section>
  </template>

<style lang="css">
.color-gradient-login{
    /* background: rgb(4,95,170); */
    background-color:#212529;
    border-bottom: 2px solid rgb(4,95,170);
    }
</style>

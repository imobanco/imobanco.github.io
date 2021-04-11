<template>
<div>
  <b-navbar toggleable="lg"
    type="light"
    class="fixed-top container-fluid imobanco"
    id="nav">
       
      <div class="container">
    <b-navbar-brand href="#"> 
      <router-link to="/" class="navbar-brand">
            <div class="logo"></div>
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
       <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <router-link
                    to="/"
                    class="text-titulo-sidebar text-decoration-none navbarbox"
                    >Home</router-link
                  >

                  <router-link
                    to="/Boletos"
                    class="text-titulo-sidebar text-decoration-none navbarbox"
                    >Boletos</router-link
                  >
                  <router-link
                    to="/Ecommerce"
                    class="text-titulo-sidebar text-decoration-none navbarbox"
                    >Ecommerce</router-link
                  >
                  <!-- <router-link
                    to="/cobrancas"
                    class="text-titulo-sidebar text-decoration-none navbarbox"
                    >Cobranças</router-link
                  > -->
                  <router-link
                    to="/imprensa"
                    class="text-titulo-sidebar text-decoration-none navbarbox"
                    >Imprensa</router-link
                  >
                   
                  <router-link
                    to="/contato"
                    class="text-titulo-sidebar text-decoration-none navbarbox"
                    >Contato</router-link
                  > 
                  <a href="https://app.imobanco.com.br/register"><b-button class="bg-primary text-light">Abra sua conta</b-button> </a>
                  
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
 
</template>
<script>
export default {
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", function() {
        var navbar = document.getElementById("nav");
        var nav_classes = navbar.classList;
        if (document.documentElement.scrollTop >= 50) {
          if (nav_classes.contains("shrink") === false) {
            nav_classes.toggle("shrink");
          }
        } else {
          if (nav_classes.contains("shrink") === true) {
            nav_classes.toggle("shrink");
          }
        };
      });    
    });
  },
};
</script>
<style></style>


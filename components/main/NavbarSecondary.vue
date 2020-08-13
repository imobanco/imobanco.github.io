<template>
  <b-navbar
    toggleable="lg"
    type="light"
    class="fixed-top container-fluid imobanco"
    id="nav"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="~assets/image/logoimobanco.png" alt />
      </router-link>
      <b-navbar-toggle
        target="nav-collapse"
        class="bg-white form-radius-total p-1"
      ></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto text-center">
          <router-link
            to="/"
            class="text-titulo-sidebar text-decoration-none text-white navbarbox"
            >Home</router-link
          >
          <router-link
            to="/pagador"
            class="text-titulo-sidebar text-decoration-none text-white navbarbox"
            >Pagador</router-link
          >
          <router-link
            to="/Boletos"
            class="text-titulo-sidebar text-decoration-none text-white navbarbox"
            >Boletos</router-link
          >
          <router-link
            to="/Ecommerce"
            class="text-titulo-sidebar text-decoration-none text-white navbarbox"
            >Ecommerce</router-link
          >
          <router-link
            to="/cobrancas"
            class="text-titulo-sidebar text-decoration-none text-white navbarbox"
            >Cobranças</router-link
          >
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
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
        }
      });
    });
  },
};
</script>
<style></style>

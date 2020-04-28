<template>
              <b-navbar toggleable="lg" type="light" class="fixed-top container imobanco" >
              <router-link to="/" class="navbar-brand"><img src="~assets/image/imobanco-azul.png" alt=""></router-link>
              <b-navbar-toggle target="nav-collapse" class="bg-gray-50"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto text-center">
                <router-link to="/" class=" text-titulo-sidebar text-decoration-none text-white navbarbox">Credor</router-link>
                <router-link to="/pagador" class="text-titulo-sidebar text-decoration-none text-white navbarbox">Pagador</router-link>
                <router-link to="/slip" class="text-titulo-sidebar text-decoration-none text-white navbarbox">Login</router-link>
                <router-link to="/slip" class="text-titulo-sidebar text-decoration-none text-white navbarbox">Registro</router-link>
              </b-navbar-nav>
              </b-collapse>
            </b-navbar>
</template>
<script>
export default {
  mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          var navbar = document.getElementById("b-navbar")
          var nav_classes = navbar.classList
          if(document.documentElement.scrollTop >= 150) {
            if (nav_classes.contains("imobanco") === false) {
              nav_classes.toggle("imobanco");
            }
          }
          else {
            if (nav_classes.contains("imobanco") === true) {
              nav_classes.toggle("imobanco");
            }
          }
        })
      })
    },
}
</script>
<style>

/* nav {
    padding: 1rem;
    transition: all 0.5s;
    border-bottom: #ddd 1px solid;
  }
  nav.shrink {
    padding: 0.3rem;
    background: #212121 !important;
  }
  nav a {
    margin-right: 1rem;
  } */
b-navbar.imobanco{
  background-color: #212121;
  padding: 10px;
  margin-left: 5px;
  margin-right: 5px;
}
.navbar-login{
  display: block;
  color: #ffffff;
  background-color: #003e69;
  padding: 10px;
   margin-left: 5px;
  margin-right: 5px;
}
.navbar-registro{
  display: block;
  color: #003e69;
  background-color: #ffffff;
  border: 1px solid #003e69;
  padding: 10px;
  margin-left: 5px;
  margin-right: 5px;
}
.color-mute{
    background-color: #f5f5f5;
    border-bottom: 2px solid rgb(4,95,170);
    }
.navbarbox{
  text-decoration: none;
  padding: 5px 15px 5px 15px;
}
</style>

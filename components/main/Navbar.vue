<template>
  <b-container class="">
    <b-row>
      <b-col cols="12" md="12" lg="12" class="bg-primary text-right">
        <router-link
          to="/"
          class=" text-titulo-sidebar text-decoration-none text-white navbarbox"
          >slide</router-link
        >
        <router-link
          to="/pagador"
          class="text-titulo-sidebar text-decoration-none text-white navbarbox"
          >Pagador</router-link
        >
        <router-link
          to="/slip"
          class="text-titulo-sidebar text-decoration-none btn bg-bluepink form-radius-total text-white navbarbox"
          >Seja Imobanco</router-link
        >
      </b-col>
    </b-row>
  </b-container>
  <!-- <b-navbar
    toggleable="lg"
    type="light"
    class="fixed-top container-fluid imobanco"
    id="nav"
  >
    <div class="container">
      <router-link to="/" class="navbar-brand bg-bluedark"
        ><img src="~assets/image/logoimobanco.png" alt="" class="text-left "
      /></router-link>
      <b-navbar-toggle
        target="nav-collapse"
        class="bg-gray-50"
      ></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto text-center">
          <router-link
            to="/"
            class=" text-titulo-sidebar text-decoration-none text-white navbarbox"
            >Credor</router-link
          >
          <router-link
            to="/pagador"
            class="text-titulo-sidebar text-decoration-none text-white navbarbox"
            >Pagador</router-link
          >
          <router-link
            to="/slip"
            class="text-titulo-sidebar text-decoration-none btn bg-bluepink form-radius-total text-white navbarbox"
            >Seja Imobanco</router-link
          >
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>-->
</template>
<script>
export default {
  // mounted() {
  //   this.$nextTick(function() {
  //     window.addEventListener("scroll", function() {
  //       var navbar = document.getElementById("nav");
  //       var nav_classes = navbar.classList;
  //       if (document.documentElement.scrollTop >= 80) {
  //         if (nav_classes.contains("shrink") === false) {
  //           nav_classes.toggle("shrink");
  //         }
  //       } else {
  //         if (nav_classes.contains("shrink") === true) {
  //           nav_classes.toggle("shrink");
  //         }
  //       }
  //     });
  //   });
  // },
};
</script> 
  <style>
    /* nav {
      padding: 1rem;
      transition: all 0.5s;
      border-bottom: #ddd 1px solid;
    }
    nav.shrink {
      padding: 0.3rem;
      background: #003e69;
    }
    nav a {
      margin-right: 1rem;
    } */
    /* b-navbar.imobanco{
   background-color: #212121;
   padding: 10px;
   margin-left: 5px;
   margin-right: 5px;
 } */
    /* @media (max-width: 786px) {
      nav {
        padding: 1rem;
        transition: all 0.5s;
        background-color: #003e69;
        border-bottom: #ddd 1px solid;
      }
      nav.shrink {
        padding: 0.3rem;
        background: #003e69;
      }
      nav a {
        margin-right: 1rem;
      }
    }
    .color-mute {
      background-color: #f5f5f5;
      border-bottom: 2px solid rgb(4, 95, 170);
    } */
    
    .navbarbox {
      text-decoration: none;
      padding: 5px 15px 5px 15px;
    }
  </style>
</template>

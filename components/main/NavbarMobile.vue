<template>
  <section class="bg-imobanco">
    <div class="container">
      <b-navbar
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
              <!-- <router-link
                to="/"
                class=" text-titulo-sidebar text-decoration-none text-white navbarbox"
                >Credor</router-link
              >
              <router-link
                to="/pagador"
                class="text-titulo-sidebar text-decoration-none text-white navbarbox"
                >Pagador</router-link
              > -->

              <router-link to="/" class="text-white text-decoration-none">
                Home</router-link
              >

              <router-link
                to="/boletos"
                class="text-white text-decoration-none"
              >
                Boleto</router-link
              >

              <router-link
                to="/ecommerce"
                class="text-white text-decoration-none"
                >E-Commerce</router-link
              >

              <router-link
                to="/cobrancas"
                class="text-white text-decoration-none"
                >Cobranças</router-link
              >

              <router-link to="/contact" class="text-white text-decoration-none"
                >Contato</router-link
              >
              <router-link
                to="/slip"
                class="text-titulo-sidebar text-decoration-none btn bg-bluepink form-radius-total text-white navbarbox"
                >Seja Imobanco</router-link
              >
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
  </section>
</template>
<script>
export default {
  name: "NavbarMobile",
};
</script>

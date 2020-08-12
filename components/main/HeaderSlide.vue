<template>
  <section class="slidemobile mt-0">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- indicators -->
      <b-carousel-slide img-src="~assets/image/banner-01.jpg">
        <caption-tag
          class="text-titulo animated bounceInUp delay-1s mt-0 pb-0 mb-0"
          >Boletos</caption-tag
        >
        <text-tag
          class="text-titulo carousel-text animated bounceInUp delay-1s pb-0 mb-0"
          >Emita, Registre e gerencie seus boletos.</text-tag
        >

        <!-- <router-link to="/boletos" class="m-0 btn btn-outline-light btn-radius animated bounceInDown" role="button">Acesse <i class="fas fa-angle-right"></i></router-link> -->
      </b-carousel-slide>

      <b-carousel-slide img-src="~assets/image/banner-02.jpg">
        <p class="text-titulo animated bounceInUp delay-1s">Fluindo mais uma</p>
        <router-link
          to="/boletos"
          class="m-0 btn btn-outline-light btn-radius animated bounceInDown"
          role="button"
          >Acesse <i class="fas fa-angle-right"></i
        ></router-link>
      </b-carousel-slide>
    </b-carousel>
    <nav-top />
    <b-container class="navzindex">
      <b-row>
        <b-col>
          <template>
            <div class="d-lg-block d-sm-none d-none navbg  pt-2">
              <ul>
                <router-link
                  to="/"
                  class="navbar-brand text-center pl-2 pt-2 pb-3"
                >
                  <img
                    src="~assets/image/logoimobanco.png"
                    alt
                    class="text-center"
                  />
                </router-link>
                <router-link
                  to="/"
                  class="text-white text-content p-3 text-decoration-none effect"
                >
                  Home</router-link
                >
                <hr class="linestyle-sidebar mt-1 mb-1" />
                <router-link
                  to="/boletos"
                  class="text-white text-content p-3 text-decoration-none effect"
                >
                  Boleto</router-link
                >
                <hr class="linestyle-sidebar mt-1 mb-1" />
                <router-link
                  to="/ecommerce"
                  class="text-white text-content p-3 text-decoration-none effect"
                  >E-Commerce</router-link
                >
                <hr class="linestyle-sidebar mt-1 mb-1" />
                <router-link
                  to="/cobrancas"
                  class="text-white text-content p-3 text-decoration-none effect"
                  >Cobranças</router-link
                >
                <hr class="linestyle-sidebar mt-1 mb-1" />
                <a
                  href="https://blog.imobanco.com.br/"
                  class="text-white text-content p-3 text-decoration-none effect"
                  target="_blank"
                  >Blog</a
                >
                <hr class="linestyle-sidebar mt-1 mb-1" />
                <router-link
                  to="/contact"
                  class="text-white text-content p-3 text-decoration-none effect"
                  >Contato</router-link
                >
              </ul>
              <div class="bg-medium pt-2 pb-2 text-center">
                <a
                  href="https://blog.imobanco.com.br/"
                  class="text-white pl-2 text-titulo-sidebar  text-white text-decoration-none effect"
                  target="_blank"
                  ><i class="far fa-arrow-alt-circle-right"></i> Seja Cliente</a
                >
              </div>
            </div>
          </template>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import NavTop from "@/components/main/NavTop.vue";
export default {
  components: {
    NavTop,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style>
.carousel-caption {
  font-size: 6vw;
  top: 45%;
}
.carousel-text {
  font-size: 16px;
  display: block;
  /* top: 10%; */
}
.slidemobile {
  background-image: url("~assets/image/banner-01.jpg") !important;
  background-size: 100% auto cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.navzindex {
  position: absolute;
  top: 5%;
  left: 10%;
  z-index: 1;
}

.navbg {
  width: 196px;
  background-color: rgba(10, 23, 55, 0.5);
  border-radius: 20px 20px 20px 2px;
  margin-left: 65px;
}
</style>

<template>
  <section class="pt-5 pb-5">
    <b-container>
      <b-row>
        <b-col cols="12" md="12" lg="8" class="pt-3 pb-3">
          <h1 class="text-left text-imobanco text-title title-font">
            O Imobanco facilita tudo para você ter uma loja virtual sem complicações
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="4" lg="4" class="text-center">
          <img
            src="~static/image/icon-produtos.png"
            class="img-fluid recursos-image"
          />
          <h4 class="text-center text-subtitle text-success">
            Cadastre seus produtos
          </h4>
        </b-col>
        <b-col cols="12" md="4" lg="4" class="text-center">
          <img
            src="~static/image/icon-departamento.png"
            class="img-fluid recursos-image"
          />
          <h4 class="text-center text-subtitle text-success">
            Escolha o departamento
          </h4>
        </b-col>
        <b-col cols="12" md="4" lg="4" class="text-center">
          <img
            src="~static/image/icon-cart.png"
            class="img-fluid recursos-image"
          />
          <h4 class="text-center text-subtitle text-success">Começar a vender</h4>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import EcommerceImage from "@/components/ecommerce/EcommerceImage.vue";

export default {
  components: {
    EcommerceImage,
  },
};
</script>

<style lang="scss" scoped></style>

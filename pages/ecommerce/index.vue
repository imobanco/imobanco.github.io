<template>
  <div class="container-fluid">
    <navbar-secondary />
    <ecommerce-slide />
    <ecommerce-recursos />
    <ecommerce-vendermais />
    <ecommerce-loja />
    <ecommerce-vantagens />
    <ecommerce-chamada cor_titulo="#003e69" cor_subtitulo="#363636" cor_botao="#002c5f" cor_texto_botao="white"/>
  </div>
</template>

<script>
import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
import EcommerceSlide from "@/components/ecommerce/EcommerceSlide.vue";
import EcommerceRecursos from "@/components/ecommerce/EcommerceRecursos.vue";
import EcommerceVendermais from "@/components/ecommerce/EcommerceVendermais.vue";
import EcommerceLoja from "@/components/ecommerce/EcommerceLoja.vue";
import EcommerceVantagens from "@/components/ecommerce/EcommerceVantagens.vue";
import EcommerceChamada from "@/components/ecommerce/EcommerceChamada.vue";

export default {
  components: {
    NavbarSecondary,
    EcommerceSlide,
    EcommerceRecursos,
    EcommerceVendermais,
    EcommerceLoja,
    EcommerceVantagens,
    EcommerceChamada,
  },
  
};
</script>

<style lang="scss" scoped></style>

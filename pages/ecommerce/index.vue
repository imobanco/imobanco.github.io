<template>
  <div class="container-fluid">
    <ecommerce-slide />
    <ecommerce-recursos />
    <ecommerce-vendermais />
    <ecommerce-loja />
    <ecommerce-chamada />
    <ecommerce-transacoes/>
    <ecommerce-vantagens />
    
    
  </div>
</template>

<script>
import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
import EcommerceSlide from "@/components/ecommerce/EcommerceSlide.vue";
import EcommerceRecursos from "@/components/ecommerce/EcommerceRecursos.vue";
import EcommerceVendermais from "@/components/ecommerce/EcommerceVendermais.vue";
import EcommerceLoja from "@/components/ecommerce/EcommerceLoja.vue";
import EcommerceTransacoes from "@/components/ecommerce/EcommerceTransacoes.vue";
import EcommerceVantagens from "@/components/ecommerce/EcommerceVantagens.vue";
import EcommerceChamada from "@/components/ecommerce/EcommerceChamada.vue";

export default {
  components: {
    NavbarSecondary,
    EcommerceSlide,
    EcommerceRecursos,
    EcommerceVendermais,
    EcommerceLoja,
    EcommerceTransacoes,
    EcommerceVantagens,
    EcommerceChamada,
  },
};
</script>

<style lang="scss" scoped></style>

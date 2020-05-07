<template>
  <div class="container-fluid">
    <div>
   <!--  <slide-page /> -->
    <ecommerce-slide />
    <ecommerce-chamada />
    <ecommerce-recursos />
    <ecommerce-vendermais />
    <ecommerce-loja />
    <ecommerce-venda />
   
    </div>
  </div>
</template>

<script>
// import SlidePage from '@/components/pages/Slidepage.vue'
import EcommerceSlide from '@/components/ecommerce/EcommerceSlide.vue'
import EcommerceChamada from '@/components/ecommerce/EcommerceChamada.vue'
import EcommerceRecursos from '@/components/ecommerce/EcommerceRecursos.vue'
import EcommerceVendermais from '@/components/ecommerce/EcommerceVendermais.vue'
import EcommerceLoja from '@/components/ecommerce/EcommerceLoja.vue'
import EcommerceVenda from '@/components/ecommerce/EcommerceVenda.vue'


export default {
  components: {
   // SlidePage,
   EcommerceSlide, 
   EcommerceChamada, 
   EcommerceRecursos, 
   EcommerceVendermais, 
   EcommerceLoja, 
   EcommerceVenda, 
  }
}
</script>

<style>

</style>

<template>
  <div class="container-fluid">
    <div>
   <!--  <slide-page /> -->
    <ecommerce-slide />
    <ecommerce-chamada />
    <ecommerce-recursos />
   
    </div>
  </div>
</template>

<script>
// import SlidePage from '@/components/pages/Slidepage.vue'
import EcommerceSlide from '@/components/ecommerce/EcommerceSlide.vue'
import EcommerceChamada from '@/components/ecommerce/EcommerceChamada.vue'
import EcommerceRecursos from '@/components/ecommerce/EcommerceRecursos.vue'


export default {
  components: {
   // SlidePage,
   EcommerceSlide, 
   EcommerceChamada, 
   EcommerceRecursos, 
  }
}
</script>

<style>

</style>

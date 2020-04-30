<template>
  <div class="container-fluid">
    <div>
   <!--  <slide-page /> -->
   <header-boleto />
    <slip-slide/>
    
    <frase-boleto 
    class="pt-5 pb-5 bg-medium"/>
    <!-- <slip-strategy/>
    <slip-management/>
    <slip-plans/> -->
    
    </div>
  </div>
</template>

<script>
// import SlidePage from '@/components/pages/Slidepage.vue'
import HeaderBoleto from '@/components/boletos/HeaderBoleto.vue'
import FraseBoleto from '@/components/boletos/FraseBoleto.vue'
// import SlipStrategy from '@/components/slip/SlipStrategy.vue'
// import SlipManagement from '@/components/slip/SlipManagement.vue'
// import SlipPlans from '@/components/slip/SlipPlans.vue'

export default {
  components: {
   
   HeaderBoleto,
   FraseBoleto
  //  SlipStrategy,
  //  SlipManagement,
  //  SlipPlans

  
    
  }
}
</script>

<style>

</style>

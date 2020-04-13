<template>
  <div class="container-fluid">
    <div>
		
		<chargescontent />
		<charges-imobanco />
    </div>
  </div>
</template>

<script>

import Chargescontent from '@/components/cobrancas/Chargescontent.vue'
import ChargesImobanco from '@/components/cobrancas/ChargesImobanco.vue'
// import FooterIndex from '@/components/index/footer/FooterIndex.vue'

export default {
  components: {
  Chargescontent,
  ChargesImobanco
    
  }
}
</script>

<style>

</style>

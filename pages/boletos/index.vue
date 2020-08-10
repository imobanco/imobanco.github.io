<template>
  <div class="container-fluid">
    <div>
      <header-boleto />
      <frase-boleto />
      <multibanco-boleto />
    </div>
  </div>
</template>

<script>
import HeaderBoleto from "@/components/boletos/HeaderBoleto.vue";
import FraseBoleto from "@/components/boletos/FraseBoleto.vue";
import MultibancoBoleto from "@/components/boletos/MultibancoBoleto.vue";

export default {
  components: {
    HeaderBoleto,
    FraseBoleto,
    MultibancoBoleto,
  },
};
</script>

<style>
</style>

<template>
  <div class="container-fluid">
    <div>
     
      <boleto-slide />
      <vantagens-boleto />
      <mais-boleto />
    </div>
  </div>
</template>

<script>

import BoletoSlide from "@/components/boletos/BoletoSlide.vue";
import VantagensBoleto from "@/components/boletos/VantagensBoleto.vue";
import MaisBoleto from "@/components/boletos/MaisBoleto.vue";

export default {
  components: {
    BoletoSlide,
    VantagensBoleto,
    MaisBoleto,
  },
};
</script>

<style lang="scss">
  .text-tachado{
    text-decoration: line-through;
  }
  mark{
    color:white;
    background-color: #38C1DF;
    border-radius: 6px;
    padding:2px;
  }
</style>

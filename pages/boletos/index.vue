<template>
  <div class="container-fluid">
    <div>
      <!--<navbar-secondary />-->
      <!--<HeaderAzul/>-->
      <frase-boleto />
      <vantagens-boleto />
      <mais-boleto />
    </div>
  </div>
</template>

<script>
//import HeaderAzul from "@/components/boletos/HeaderAzul.vue";
//import MultibancoBoleto from "@/components/boletos/MultibancoBoleto.vue";
import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
import FraseBoleto from "@/components/boletos/FraseBoleto.vue";
import VantagensBoleto from "@/components/boletos/VantagensBoleto.vue";
import MaisBoleto from "@/components/boletos/MaisBoleto.vue";

export default {
  components: {
//  HeaderAzul,
//  MultibancoBoleto,
    NavbarSecondary,
    FraseBoleto,
    VantagensBoleto,
    MaisBoleto,
  },
};
</script>

<style lang="scss">
  h2,h4{
    color:#003F69;
    font-weight: bold;
  }
  .subtitulo{
    font-size: 30px;
    color:#38C1DE;
  }
  .span-subtitulo{
    color:#003F69;
    font-size: 12px;
  }
  .text-mark{
    color:#38C1DE;
    text-decoration: line-through;
  }
  .btn-primary{
    background-color:#003F69;
    border-color: transparent;
  }
</style>

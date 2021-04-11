<template>
  <div>
    <ContaDigitalSection />
    <FoqueSection />
    <ParceiroSection />
    <ecommerce-chamada />
    <TecnologiaSection />   
    <NoticiasSection titulo="Notícias" />
  </div>
</template>

<script>
import ContaDigitalSection from "../components/inicio/ContaDigitalSection";
import FoqueSection from "../components/inicio/FoqueSection";
import ParceiroSection from "../components/inicio/ParceiroSection";
import TecnologiaSection from "../components/inicio/TecnologiaSection";
import NoticiasSection from "../components/inicio/NoticiasSection";
import EcommerceChamada from "@/components/ecommerce/EcommerceChamada.vue";

export default {
  components: {
    ContaDigitalSection,
    FoqueSection,
    ParceiroSection,
    TecnologiaSection,
    NoticiasSection,
    EcommerceChamada,
  }
};
</script>
<style></style>

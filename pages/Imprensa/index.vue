<template>
  <div class="container-fluid">
    <imprensa-slide />
    <ReleaseSection />
    <noticias-section titulo="Notícias"/>
    <footer-imprensa />
  </div>
</template>

<script>
import ReleaseSection from "@/components/imprensa/ReleaseSection.vue";
import ImprensaSlide from "@/components/imprensa/ImprensaSlide.vue";
import NoticiasSection from "@/components/inicio/NoticiasSection.vue";
import FooterImprensa from "@/components/imprensa/FooterImprensa.vue";


export default {
  components: {
    ReleaseSection,
    ImprensaSlide,
    NoticiasSection,
    FooterImprensa
    
  }
};
</script>

<style></style>

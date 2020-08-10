<template>
  <div>
    <navbar />
    <header-slide />
    <persona-section />
    <services-section />
    <facilidades-item />
  </div>
</template>

<script>
import Navbar from "@/components/main/Navbar.vue";
import HeaderSlide from "~/components/main/HeaderSlide.vue";
import PersonaSection from "~/components/index/persona/PersonaSection.vue";
import FacilidadesItem from "~/components/index/facilidadesimobanco/FacilidadesItem.vue";
import ServicesSection from "~/components/index/services/ServicesSection.vue";

export default {
  components: {
    Navbar,
    HeaderSlide,
    PersonaSection,
    FacilidadesItem,
    ServicesSection,
  },
};
</script>
<style></style>

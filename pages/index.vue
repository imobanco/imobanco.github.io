<template>
  <div>
    <navbar-mobile />
    <header-slide />
    <persona-section />
    <services-section />
    <facilidades-item />
  </div>
</template>

<script>
import NavbarMobile from "@/components/main/NavbarMobile.vue";
import HeaderSlide from "~/components/main/HeaderSlide.vue";
import PersonaSection from "~/components/index/persona/PersonaSection.vue";
import FacilidadesItem from "~/components/index/facilidadesimobanco/FacilidadesItem.vue";
import ServicesSection from "~/components/index/services/ServicesSection.vue";

export default {
  components: {
    NavbarMobile,
    HeaderSlide,
    PersonaSection,
    FacilidadesItem,
    ServicesSection,
  },
};
</script>
<style></style>

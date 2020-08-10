<template>
  <div>
    <header-slide />
    <persona-section />
    <services-section />
    <facilidades-item />
  </div>
</template>

<script>
import HeaderSlide from "~/components/main/HeaderSlide.vue";
import PersonaSection from "~/components/index/persona/PersonaSection.vue";
import FacilidadesItem from "~/components/index/facilidadesimobanco/FacilidadesItem.vue";
import ServicesSection from "~/components/index/services/ServicesSection.vue";

export default {
  components: {
    HeaderSlide,
    PersonaSection,
    FacilidadesItem,
    ServicesSection,
  },
};
</script>
<style></style>

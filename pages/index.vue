<template>
  <div>
    <header-slide />
    <persona-section />
    <formas-item />
  </div>
</template>

<script>
import HeaderSlide from "~/components/main/HeaderSlide.vue";
import PersonaSection from "~/components/index/persona/PersonaSection.vue";
import FormasItem from "~/components/index/formasimobanco/FormasItem.vue";

export default {
  components: {
    HeaderSlide,
    PersonaSection,
    FormasItem,
  },
};
</script>
<style></style>

<template>
  <section class="bg-graylight pt-5 pb-5">
    <persona-title />
    <persona-slide class="bg-primary" />
    <persona-professional />
  </section>
</template>

<script>
import PersonaTitle from "~/components/index/persona/PersonaTitle.vue";
import PersonaSlide from "~/components/index/persona/PersonaSlide.vue";
import PersonaProfessional from "~/components/index/persona/PersonaProfessional.vue";
export default {
  name: "PersonasSection",
  components: {
    PersonaTitle,
    PersonaSlide,
    PersonaProfessional,
  },
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="container-fluid">
    <navbar-secondary />
    <imprensa-slide />
    <post-single />
  </div>
</template>

<script>
import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
import ImprensaSlide from "@/components/imprensa/ImprensaSlide.vue";
import PostSingle from "@/components/imprensa/PostSingle.vue";

export default {
  components: {
    NavbarSecondary,
    ImprensaSlide,
    PostSingle,
  },
};
</script>

<style></style>

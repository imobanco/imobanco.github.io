<template>
  <div class="container-fluid">
    <navbar-secondary />
    <imprensa-slide />
    <post-item />
  </div>
</template>

<script>
import PostItem from "@/components/imprensa/PostItem.vue";
import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
import ImprensaSlide from "@/components/imprensa/ImprensaSlide.vue";

export default {
  components: {
    PostItem,
    NavbarSecondary,
    ImprensaSlide,
  },
};
</script>

<style></style>

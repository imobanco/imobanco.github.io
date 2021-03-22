<template>
  <div class="container-fluid">
    <!--<navbar-secondary />-->
    <imprensa-slide />
    <post-item />
    <footer-imprensa />
  </div>
</template>

<script>
//import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
import PostItem from "@/components/imprensa/PostItem.vue";
import ImprensaSlide from "@/components/imprensa/ImprensaSlide.vue";
import FooterImprensa from "@/components/imprensa/FooterImprensa.vue";

export default {
  components: {
    //NavbarSecondary,
    PostItem,
    ImprensaSlide,
    FooterImprensa,
  },
};
</script>

<style></style>

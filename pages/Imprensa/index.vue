<template>
  <div class="container-fluid">
    <navbar-secondary />
    <ecommerce-slide />
    <router-link
      to="/imprensa/realease"
      class="text-primary text-content p-3 text-decoration-none effect"
    >Realease</router-link>
    <post-item />
  </div>
</template>

<script>
import PostItem from "@/components/imprensa/PostItem.vue";
import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
import EcommerceSlide from "@/components/ecommerce/EcommerceSlide.vue";

export default {
  components: {
    PostItem,
    NavbarSecondary,
    EcommerceSlide,
  },
};
</script>

<style></style>

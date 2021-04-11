<template>
  <div>
    <footer-content />
    <footer-social />
  </div>
</template>

<script>
import FooterSocial from "@/components/footer/FooterSocial.vue";
import FooterContent from "@/components/footer/FooterContent.vue";

export default {
  name: "FooterIndex",
  components: {
    FooterSocial,
    FooterContent
  },
};
</script>

<style></style>

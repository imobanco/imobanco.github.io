<template>
  <div class="container-fluid">
    <!--<navbar-secondary />-->
    <!--<chat-comercial />-->
    <!-- <contact-question /> -->
    <contact-slide />
    <contact-content />
  </div>
</template>

<script>
//import NavbarSecondary from "@/components/main/NavbarSecondary.vue";
//import ChatComercial from "@/components/index/chatcomercial/ChatComercial.vue";
// import ContactQuestion from "@/components/contact/ContactQuestion.vue";
import ContactSlide from "@/components/contact/ContactSlide.vue";
import ContactContent from "@/components/contact/ContactContent.vue";

export default {
  components: {
    //NavbarSecondary,
    //ChatComercial,
    // ContactQuestion,
    ContactSlide,
    ContactContent,
  },
};
</script>

<style></style>

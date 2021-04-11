<template>
  <div class="container-fluid">
    <BlogSlide/>
    <BlogContent/>
    <NoticiasSection titulo="Outras Notícias"/>
    <FooterImprensa/>
  </div>
</template>

<script>
import BlogSlide from "@/components/blog/BlogSlide.vue";
import BlogContent from "@/components/blog/BlogContent.vue";
import NoticiasSection from "@/components/inicio/NoticiasSection.vue";
import FooterImprensa from "@/components/imprensa/FooterImprensa.vue";

export default {
  components: {
    BlogSlide,
    BlogContent,
    NoticiasSection,
    FooterImprensa
  },
};
</script>

<style></style>

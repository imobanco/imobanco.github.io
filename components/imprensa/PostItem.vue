<template>
  <b-container>
    <b-row>
      <post-card />
    </b-row>
  </b-container>
</template>

<script>
import PostCard from "@/components/imprensa/PostCard.vue";
export default {
  name: "PostItem",
  components: {
    PostCard,
  },
};
</script>

<style lang="scss" scoped>
</style>
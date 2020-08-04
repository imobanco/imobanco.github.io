<template>
  <b-container fluid>
    <b-row>
      <img v-for="(media, index) in galery_picture" :src="media.picture" alt class="img-fluid" />
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "PersonaSlide",
  data() {
    return {
      galery_picture: [
        {
          picture: "image/persona-01.jpg",
        },
        {
          picture: "image/persona-02.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
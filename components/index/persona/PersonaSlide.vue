<template>
  <b-container fluid class="bg-gray-500">
    <b-row>
      <b-col lg="12" class="text-center">
        <img v-for="(media, index) in galery_picture" :src="media.picture" alt :class="fluid" />
      </b-col>
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
          fluid: "img-fluid",
        },
        {
          picture: "image/persona-02.jpg",
          fluid: "img-fluid",
        },
        {
          picture: "image/persona-03.jpg",
          fluid: "img-fluid",
        },
        {
          picture: "image/persona-04.jpg",
          fluid: "img-fluid",
        },

        // {
        //   picture: "image/persona-06.jpg",
        //   fluid: "img-fluid",
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
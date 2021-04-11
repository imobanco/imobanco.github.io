<template>
  <b-container>
    <b-row class="justify-content-center pt-5 pb-5">
      <b-col cols="12" md="12" lg="12" class="text-left">
        <h1 class="text-imobanco text-title mt-3 mb-4 title-font">Release imprensa</h1>
      </b-col>
     
      <b-col cols="12" md="12" lg="12" class="text-left bg-graylight form-radius pt-5 pb-5 box">
        <div v-for="release in response" :key="release" :v-if="response">
          <Release :release="release" :release_id="release['id']" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Release from "./Release";
export default {
  name: "App",
  components: {
    Release
  },
  data() {
    return {
      // Initialize "response"
      response: null
    };
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      //const response = await this.$prismic.client.query("");
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("document.type", "releases")
      );
      this.response = response["results"].slice(0, 2);
    }
  },
  created() {
    // Call the API query method
    this.getContent();
  }
};
</script>

<style lang="scss" scoped>
.box {
  box-shadow: 1px 4px 5px -2px rgba(80, 79, 79, 0.75);
  -webkit-box-shadow: 1px 4px 5px -2px rgba(80, 79, 79, 0.75);
  -moz-box-shadow: 1px 4px 5px -2px rgba(80, 79, 79, 0.75);
}
</style>

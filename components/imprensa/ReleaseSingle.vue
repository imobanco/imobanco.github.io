<template>
  <section >
    <imprensa-slide />
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" md="6" lg="8" class="text-left mt-4" v-if="response">
          <h1 class="text-imobanco text-title title-font">{{response['data']['titulo'][0]['text']}}</h1>
          <h6
            class="text-content text-blackdark"
          >Data: {{response['data']['data'].split('-').reverse().join('/')}}</h6>
          <br />
          <br />
          <div v-for="paragrafo in content_full" :key="paragrafo" :v-if="content_full">
            <p class="text-content text-blackdark text-left">{{ paragrafo['text']}}</p>
          </div>
          <footer-imprensa />
        </b-col>
      </b-row>
    </b-container>
    
  </section>
</template>

<script>
import ImprensaSlide from "@/components/imprensa/ImprensaSlide.vue";
import FooterImprensa from "@/components/imprensa/FooterImprensa.vue";

if (process.browser) {
  var release_id = location.search.slice(1).split("=")[1];
}
export default {
  components: {
    ImprensaSlide,
    FooterImprensa
  },
  data() {
    return {
      //release_id,
      release_id,
      content_full: null,
      response: null
    };
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("document.type", "releases")
      );
      this.response = response["results"];
      for (let i = 0; i < this.response.length; i++) {
        if (this.response[i]["id"] == this.release_id) {
          this.response = this.response[i];
          this.content_full = this.response["data"]["conteudo"];
        }
      }
    }
  },
  created() {
    // Call the API query method
    this.getContent();
  }
};
</script>
<style lang="scss" scoped>
section {
  padding-top: 100px;
  padding-bottom: 50px;
}
</style>
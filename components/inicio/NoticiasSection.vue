<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12" md="6" lg="12" class="text-left">
          <h3 class="text-imobanco text-title title-font">{{titulo}}</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="12"
          md="6"
          lg="4"
          class="text-left mt-2"
          v-for="post in response"
          :key="post"
          :v-if="response"
        >
          <Noticias
            :post_id="response[response.indexOf(post)]['id']"
            :post_title="response[response.indexOf(post)]['data']['titulo'][0]['text']"
            :post_image="response[response.indexOf(post)]['data']['imagem']['url']"
            :post_date="response[response.indexOf(post)]['first_publication_date'].split('T')[0].split('-').reverse().join('/')"
            :post_content="response[response.indexOf(post)]['data']['conteudo'][0]['text']"
          />
        </b-col>

      </b-row>
    </b-container>
  </section>
</template>
<script>
import Noticias from "./Noticias";
export default {
  name: "App",
  props: ["titulo"],
  components: {
    Noticias
  },
  data() {
    return {
     
      response: null
    };
  },
  methods: {
    async getContent() {
    
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("document.type", "post")
      );
      
      this.response = response["results"].slice(0, 3);
    }
  },
  created() {
   
    this.getContent();
  }
};
</script>
<style lang="scss" scoped>
section {
  padding-top: 25px;
  padding-bottom: 50px;
}
</style>
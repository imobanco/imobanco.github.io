<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12" md="6" lg="12" class="text-left">
          <h3 class="text-imobanco text-title title-font" :v-if="category">{{category}}</h3>
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
          <div v-if="category=='post'" class="pt-5 mt-3">
            <Noticias
              :post_id="response[response.indexOf(post)]['id']"
              :post_title="response[response.indexOf(post)]['data']['titulo'][0]['text']"
              :post_image="response[response.indexOf(post)]['data']['imagem']['url']"
              :post_date="response[response.indexOf(post)]['first_publication_date'].split('T')[0].split('-').reverse().join('/')"
              :post_content="response[response.indexOf(post)]['data']['conteudo'][0]['text']"
            />
          </div>
        </b-col>
        <div v-if="category=='releases'">
          <b-col cols="12" md="12" lg="12" class="text-left bg-graylight form-radius pt-5 pb-5 box">
            <div v-for="release in response" :key="release" :v-if="response">
              <Release :release="release" :release_id="release['id']" />
            </div>
          </b-col>
        </div>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import Noticias from "../../components/inicio/Noticias";
import Release from "../../components/imprensa/Release";
if (process.browser) {
  var category = location.search.slice(1);
}
export default {
  name: "App",
  components: {
    Noticias,
    Release
  },
  data() {
    return {
      category,
      response: null
    };
  },
  methods: {
    async getContent() {
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("document.type", category)
      );

      this.response = response["results"];
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
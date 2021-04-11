<template>
  <section>
    <imprensa-slide />
    <b-container>
      <b-row class="justify-content-center">
               
        <b-col cols="12" md="12" lg="8" class="text-center mt-4 rounded" v-if="response">        
 
        <img
            :src="response['data']['imagem']['url']"
            alt="imagem principal do post"
            class="img-fluid rounded"
            srcset
          />
          <br />
           <h1 class="text-imobanco text-title title-font text-left  mt-4">
            {{response['data']['titulo'][0]['text']}} 
          </h1>
            <div v-for="paragrafo in content_full" :key="paragrafo" class="text-left  mt-4">
            <p class="text-content text-blackdark">{{ paragrafo['text']}}</p>         
          </div>
          <!-- <div>
            <p class="subtitle">Compartilhar: <share-it icons outline round/></p>
          </div> -->
          
        </b-col>
        <b-col cols="12" md="12"  lg="8">
          <footer-imprensa />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import FooterImprensa from "@/components/imprensa/FooterImprensa.vue";
import ImprensaSlide from "@/components/imprensa/ImprensaSlide.vue";
if (process.browser) {
  var post_id = location.search.slice(1).split("=")[1];
}
export default {
  data() {
    return {
      post_id,
      content_full: null,
      response: null
    };
  },
  components: {
    FooterImprensa,
    ImprensaSlide, 
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query("");
      this.response = response["results"];
      for (let i = 0; i < this.response.length; i++) {
        if (this.response[i]["id"] == this.post_id) {
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
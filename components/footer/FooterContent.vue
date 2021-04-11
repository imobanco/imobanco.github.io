<template>
  <section class="pt-3">
    <b-container>
      <b-row class="mt-4">
        <b-col cols="12" md="12" lg="5" class="text-left">
          <router-link to="/" class="navbar-brand">
            <img src="~static/image/logoimobanco.png" alt class="img-fluid"/>
          </router-link>
          <p class="text-white text-content mt-2">
            O banco digital Imobanco é uma instituição inovadora que oferece gestão financeira inteligente de negócios com serviços de conta digital, recebimentos, pagamentos, transferências, cobranças e e-commerce. A plataforma agrega sistemas modernos e intuitivos para facilitar a vida do empreendedor que terá, em um único lugar, todas as ferramentas para gerenciar qualquer tipo de negócio.
          </p>
        </b-col>
        <b-col lg="1"></b-col>

        <!-- Tópicos IMOBANCO -->
        <b-col cols="6" md="4" lg="2" class="text-left mt-5">
          <h5 class="text-white text-title">Utilidade</h5>
          <p
            v-for="(topic, index) in topics_utilidade"
            key="index"
            class="mt-0 mb-0 text-content"
          >
            <a :href="topic.link" class="text-white">{{ topic.title }}</a>
          </p>
        </b-col>

        <!-- Tópico SOLUÇÕES -->
        <b-col cols="6" md="4" lg="2" class="text-left mt-5">
          <h5 class="text-white text-title">Soluções</h5>
          <p v-for="(topic, index) in topics_solution" class="mt-0 mb-0 text-content">
            <router-link
              :to="topic.link"
              class="text-white text-decoration-none"
              >{{ topic.title }}</router-link
            >
          </p>
        </b-col>

        <!-- Lista de REDES SOCIAIS -->
        <b-col cols="6" md="4" lg="2" class="text-left mt-5">
          <h5 class="text-white text-title">Ajuda</h5>
          <p v-for="(topic, index) in topics_ajuda" class="mt-0 mb-0 text-content">
            <router-link
              :to="topic.link"
              class="text-white text-decoration-none"
              >{{ topic.title }}</router-link
            >
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import FooterSocial from "@/components/footer/FooterSocial.vue";
export default {
  name: "FooterIndex",
  components: {
    FooterSocial,
  },
  data() {
    return {
      topics_utilidade: [
        // { title: "Blog", link: "#" },
        { title: "Contato", link: "/contato" },
        { title: "Imprensa", link: "/imprensa" },
        // { title: "Ouvidoria", link: "#" },
        { title: "Desenvolvedores", link: "https://imopay.com.br/" },
      ],
      topics_solution: [
        { title: "Boleto", link: "/boletos" },
        // { title: "Cobrança", link: "/cobrancas" },
        { title: "E-Commerce", link: "/ecommerce" },
      ],
      topics_ajuda: [
        { title: "Manual", link: "#" },
        { title: "Política E-Commerce", link: "#" },
        // { title: "Política de Privacidade", link: "#" },
        // { title: "Trabalhe Conosco", link: "#" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  section{
    background-color: #2e2c2c;
  }
</style>

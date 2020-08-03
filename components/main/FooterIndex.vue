<template>
  <section class="bg-primary pt-5 pb-5">
    <b-container>
      <b-row>
        <b-col cols="12" md="12" lg="3" class="text-left">
          <router-link to="/" class="navbar-brand">
            <img src="~assets/image/logoimobanco.png" alt />
          </router-link>
        </b-col>

        <!-- Tópicos IMOBANCO -->
        <b-col cols="6" md="4" lg="3" class="text-left">
          <h5 class="text-white">Imobanco</h5>
          <p
            v-for="(topic, index) in topics_imobanco"
            key="index"
            class="mt-0 mb-0"
          >
            <a :href="topic.link" class="text-white">{{ topic.title }}</a>
          </p>
        </b-col>

        <!-- Tópico SOLUÇÕES -->
        <b-col cols="6" md="4" lg="3" class="text-left">
          <h5 class="text-white">Soluções</h5>
          <p v-for="(topic, index) in topics_solution" class="mt-0 mb-0">
            <router-link
              :to="topic.link"
              class="text-white text-decoration-none"
            >
              {{ topic.title }}
            </router-link>
          </p>

          <br />
          <h5 class="text-white">Ajuda e Suporte:</h5>
          <p class="mt-0 mb-0">
            <a
              href="https://t.me/imobancobot"
              class="text-white text-decoration-none"
            >
              <img src="~/assets/image/telegram.png" alt class="ml-1 mr-1" />
              <span class="pt-2">Chat Imobanco: 24h online</span>
            </a>
          </p>
        </b-col>

        <!-- Lista de REDES SOCIAIS -->
        <b-col cols="12" md="4" lg="3">
          <h5 class="text-white">Redes Sociais:</h5>
          <p class="text-white text-content mt-2">
            <span class="text-content">
              <a
                v-for="(media, index) in social_media"
                :href="media.link"
                target="_blank"
              >
                <img :src="media.icon" alt class="ml-1 mr-1" />
              </a>
            </span>
          </p>
          <h5 class="text-white">Conta com a gente:</h5>
          <p class="text-white text-content mt-2">
            Quaisquer esclarecimentos e dúvidas, entre em contato conosco e
            <span class="text-success">#vemvocêtambém</span> ser Imobanco.
          </p>
        </b-col>
        <b-col cols="12" md="12" lg="12" class="text-center">
          <hr />
          <p class="text-white text-content mt-3">
            Imobanco 2020 © - Todos os direitos reservados.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "FooterIndex",
  data() {
    return {
      topics_imobanco: [
        { title: "Blog", link: "#" },
        { title: "Desenvolvedores", link: "#" },
        { title: "Faq", link: "#" },
        { title: "Manual", link: "#" },
        { title: "Ouvidoria", link: "#" },
        { title: "Política E-Commerce", link: "#" },
        { title: "Política de Privacidade", link: "#" },
        { title: "Trabalhe Conosco", link: "#" },
      ],
      topics_solution: [
        { title: "Boleto", link: "/boleto" },
        { title: "Cobrança", link: "/charges" },
        { title: "E-Commerce", link: "/ecommerce" },
      ],
      social_media: [
        {
          title: "Facebook",
          link: "https://www.facebook.com/imobanco/",
          icon: "image/facebook.png",
        },
        {
          title: "Instagram",
          link: "https://www.instagram.com/imobanco/",
          icon: "image/instagram.png",
        },
        {
          title: "Twitter",
          link: "https://twitter.com/imobanco",
          icon: "image/twitter.png",
        },
      ],
    };
  },
};
</script>

<style></style>

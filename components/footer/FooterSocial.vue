<template>
  <section>
    <b-container>
      <b-row>
        <b-col cols="12" md="12" lg="12" class="text-center pt-3">
          <p class="text-white text-content mt-2">
            <span class="text-content">
              <a v-for="(media, index) in social_media" :href="media.link" target="_blank">
                <img :src="media.icon" alt class="ml-1 mr-1 icon-footer" />
              </a>
            </span>
          </p>
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
  name: "FooterSocial",
  data() {
    return {
      social_media: [
        
        {
          title: "Facebook",
          link: "https://www.facebook.com/imobanco/",
          icon: "image/social-facebook.png",
        },
        {
          title: "Youtube",
          link: "https://www.youtube.com/channel/UCFe-OZKEAc2gQ4elclp1MUg",
          icon: "image/social-youtube.png",
        },
        {
          title: "Twitter",
          link: "https://twitter.com/imobanco",
          icon: "image/social-twitter.png",
        },
        {
          title: "Linkedin",
          link: "https://br.linkedin.com/company/imobanco",
          icon: "image/social-linkedin.png",
        },
        {
          title: "Instagram",
          link: "https://www.instagram.com/imobanco/",
          icon: "image/social-instagram.png",
        }/*
        {
          title: "Telegram",
          link: "https://t.me/imobancobot",
          icon: "image/social-telegram.png",
        },*/
        
        
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  section{
    background-color: black;
  }
</style>>


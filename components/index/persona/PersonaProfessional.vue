<template>
  <b-container>
    <b-row class="pt-3 pb-3">
      <b-col
        v-for="(topic, index) in topics_professional"
        key="index"
        cols="12"
        md="4"
        lg="4"
        class="text-center"
      >
        <b-img :src="topic.image" class="img-fluid text-center" style="width: 100px" />
        <h5 class="text-white">{{ topic.title}}</h5>
        <hr class="lineimobanco" />
        <p class="text-justify text-graylight v-scrollanimation">{{ topic.text }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "FooterIndex",
  data() {
    return {
      topics_professional: [
        {
          image: "image/icon-imoveis.png",
          title: "Locadores e corretores de imóveis",
          text:
            "Feito para descomplicar seus recebimentos. Concentre tudo em um único ambiente. Cobre e receba seu aluguel com a gente!",
        },
        {
          image: "image/icon-profissionais.png",
          title: "Profissionais liberais",
          text:
            "Concentre todos os seus esforços em fechar novos negócios, e deixe que o Imobanco cuida para que você só se preocupe em receber. ",
        },
        {
          image: "image/icon-microempresas.png",
          title: "Micro e pequenos comerciantes",
          text:
            "Colocamos o seu negócio online no máximo em 7 dias, 100% integrado com nossa gestão inteligente de recebimentos. Venda para todo o Brasil!",
        },
      ],
    };
  },
};
</script>

<style></style>

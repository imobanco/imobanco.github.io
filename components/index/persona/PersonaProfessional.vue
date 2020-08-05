<template>
  <b-container>
    <b-row class="pt-3 pb-3">
      <b-col
        v-for="(topic, index) in topics_professional"
        key="index"
        cols="12"
        md="4"
        lg="4"
        class="text-left"
      >
        <h5 class="text-secondary">{{ topic.title}}</h5>
        <hr class="lineimobanco" />
        <p class>{{ topic.text }}</p>
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
          title: "Locadores e corretores de imóveis",
          text:
            "Feito para descomplicar seus recebimentos. Concentre tudo em um único ambiente. Cobre e receba seu aluguel com a gente! Caso seja Corretor de Imóveis, além disso partilhe a arrecadação de forma pré-programada, simples e praticamente.",
        },
        {
          title: "Profissionais liberais",
          text:
            "Concentre todos os seus esforços em fechar novos negócios, e deixe que o Imobanco cuida para que você só se preocupe em receber. Emita seus recebimentos com boletos ou assinaturas recorrentes no cartão de crédito e tenha a tranquilidade de poder contar com nosso backoffice para promover a cobrança dos valores inadimplidos.",
        },
        {
          title: "Micro e pequenos comerciantes",
          text:
            "Colocamos o seu negócio online no máximo em 7 dias, 100% integrado com nossa gestão inteligente de recebimentos. Venda para todo o Brasil! É fácil, é simples, É IMOBANCO!.",
        },
      ],
    };
  },
};
</script>

<style></style>

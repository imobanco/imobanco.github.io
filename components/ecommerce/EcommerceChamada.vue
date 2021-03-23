<template>
  <section class="bg-graylight pb-4">
    <b-container>
      <b-row>
        <b-col cols="12" md="7" lg="8" class="pt-5">
          <h1 class="mt-5 mb-0 text-title title-font" v-bind:style="{color:cor_titulo}">
            Garanta já a sua presença no mundo online
          </h1>
          <h5 class="text-content pb-0 mb-0" v-bind:style="{color:cor_subtitulo}" >
            Preço: Setup e custo para treinamento
          </h5>
          <h1 class="mb-0 text-title title-font" v-bind:style="{color:cor_subtitulo}" >R$ 0,00</h1>
          <h5 class="text-content" v-bind:style="{color:cor_subtitulo}" >
            Gratuito até 15 de setembro. *consulte as taxas transacionais.
          </h5>
          <a
            href="http://app.imobanco.com.br/register"
            target="_blank"
            class="btn mt-3" v-bind:style="{background:cor_botao,color:cor_texto_botao}" 
            >Contrate já!</a
          >
        </b-col>
        <b-col cols="12" md="5" lg="4" class="pt-5">
          <img src="image/online-1.png" alt class="img-fluid" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: {
    cor_titulo: String,
    cor_subtitulo: String,
    cor_botao: String,
    cor_texto_botao:String
  },
};
</script>

<style lang="scss" scoped></style>

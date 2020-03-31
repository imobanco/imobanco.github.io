<template>
    <div>
      <pagador-slide />
      <pagador-bar />
      <pagador-boleto />
      <pagador-content />
      
    </div>
     
</template>

<script>
import PagadorSlide from '~/components/pagador/PagadorSlide.vue';
import PagadorBar from '~/components/pagador/PagadorBar.vue';
import PagadorContent from '~/components/pagador/PagadorContent.vue';
import PagadorBoleto from '~/components/pagador/PagadorBoleto.vue';
// import PagadorSlide from '~/components/pagador/PagadorSlide.vue';

export default {
  components: {
    PagadorSlide,
    PagadorBar,
    PagadorContent,
    PagadorBoleto,
  }
}
</script>

<style>

</style>
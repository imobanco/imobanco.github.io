<template>
    <div>
    <pagador-slide />
    <pagador-content />
    <pagador-bar />
    <pagador-boleto />
    
    </div> 
</template>

<script>
import PagadorSlide from '~/components/pagador/PagadorSlide.vue';
import PagadorBar from '~/components/pagador/PagadorBar.vue';
import PagadorContent from '~/components/pagador/PagadorContent.vue';
import PagadorBoleto from '~/components/pagador/PagadorBoleto.vue';

export default {
  components: {
    PagadorBar,
    PagadorSlide,
    PagadorBoleto,
    PagadorContent

  }
}
</script>

<style>

</style>
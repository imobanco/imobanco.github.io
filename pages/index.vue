<template>
    <div>
    <header-slide />
    <servicos />
    <services />
    <solucao />
    <newsletter />
    <blog />
    </div> 
</template>

<script>

import HeaderSlide from '~/components/main/HeaderSlide.vue';
import Servicos from '@/components/index/servicos/Servicos.vue'
import Services from '@/components/index/services/Services.vue'
import Solucao from '@/components/index/solucoes/Solucao.vue'
// import Plans from '@/components/index/pricing/Plans.vue'
import Newsletter from '@/components/index/newsletter/Newsletter.vue'
import Blog from '@/components/index/blog/Blog.vue'
// import Media from '@/components/index/media/Media.vue'


export default {
  components: {
    HeaderSlide,
    Servicos,
    Services,
    Solucao,
    // Plans,
    Newsletter,
    Blog,
    // Media
  }
}
</script>

<style>

</style>

<template>
    <div>
    <header-slide />
    <services />
    <solucao />
<<<<<<< HEAD
    <plans />
=======
>>>>>>> 2481024e6a433db961e0d03bcb69c8eadf3f365f
    <blog />
    <newsletter />
    </div> 
</template>

<script>

import HeaderSlide from '~/components/main/HeaderSlide.vue';
import Services from '@/components/index/services/Services.vue'
import Solucao from '@/components/index/solucoes/Solucao.vue'
import Plans from '@/components/index/pricing/Plans.vue'
import Newsletter from '@/components/index/newsletter/Newsletter.vue'
import Blog from '@/components/index/blog/Blog.vue'
// import Media from '@/components/index/media/Media.vue'


export default {
  components: {
    HeaderSlide,
    Services,
    Solucao,
    Plans,
    Newsletter,
    Blog,
    // Media
  }
}
</script>

<style>

</style>

<template>
    <section class="bg-gray-50">
        <div class="container">
            <div class="row pt-4 pb-4">
                <div class="col-lg-6">
                    <h1 class="mt-5 text-primary text-titulo">
                    <!-- <img src="~/assets/image/line-white.png" alt="" class="line-white"> -->
                    Notícias - blog</h1>
                    <p class="text-gray-300 text-subtitulo mt-1 mb-1">Notícias sobre - Boleto, Cobranças, E-Commerce</p>
                </div>
                <div class="col-lg-6 text-right">
                    <a href="https://blog.imobanco.com.br/" target="_blank" class="mt-5 btn btn-outline-dark  btn-radius" role="button">Acessar o Blog <i class="fas fa-angle-right"></i></a>
                </div>

                <blog-list />
                
                <div class="col-lg-12 text-center">
                    <a href="https://blog.imobanco.com.br/" target="_blank" class="mt-5 btn btn-outline-dark btn-radius" role="button">Leia mais notícias <i class="fas fa-angle-right"></i></a>
                </div>

            </div>
        </div>
	</section>
</template>

<script>
import BlogList from '@/components/index/blog/BlogList.vue'

export default {
  components: {
    BlogList
  }
}
</script>

<style lang="scss" scoped>

</style>
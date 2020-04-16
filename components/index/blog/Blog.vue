<template>
	<section class="bg-blue-1">
    <div class="container">
		<div class="row pt-4 pb-4">
            <div class="col-lg-6">
                <h3 class="mt-5 text-white text-titulo">
                  <!-- <img src="~/assets/image/line-white.png" alt="" class="line-white"> -->
                  Notícias - blog</h3>
                <p class="text-white text-subtitulo mt-1 mb-1">Notícias sobre - Boleto, Cobranças, E-Commerce</p>
            </div>
            <div class="col-lg-6 text-right">
                 <a class="mt-5 btn btn-info bg-primary btn-radius" href="#" role="button">Acessar o Blog <i class="fas fa-angle-right"></i></a>
            </div>
			<div class="col-lg-4 col-md-6">
                <span class="boxcatindex">E-commerce</span>
                <img src="~/assets/image/blogimobanco1.jpg" alt="" class="img-fluid imgcover">
                 <a href="http://blog.imobanco.com.br/2020/02/11/tendencias-para-o-mercado-imobiliario-em-2020/" class="text-decoration-none" target="_blank"><h3 class="text-white text-titulo text-left mt-2 mb-0">Tendências para o mercado imobiliário em 2020</h3></a>
                <p class="text-white text-justify text-subtitulo mt-2">Como previsto ainda no segundo semestre de 2019, a economia brasileira timidamente cresceu, diminuindo a especulação e atraindo novos investidores.</p>
			</div>
            <div class="col-lg-4 col-md-6">
              <span class="boxcatindex">E-commerce</span>
                <img src="~/assets/image/blogimobanco2.jpg" alt="" class="img-fluid imgcover">
                <a href="https://blog.imobanco.com.br/2019/08/12/tecnologia-aplicada-ao-universo-imobanco/" class="text-decoration-none" target="_blank"><h3 class="text-white text-titulo text-left mt-2 mb-0">Tecnologia aplicada ao Universo Imobanco
</h3></a>
                <p class="text-white text-justify text-subtitulo mt-2">O termo Universo Imobanco surgiu para explicar o conjunto de departamentos que englobam o Imobanco: Recebíveis, Cobrança, Fomento e toda tecnologia aplicada...</p>
            </div>
            <div class="col-lg-4 col-md-6">
              <span class="boxcatindex">E-commerce</span>
                <img src="~/assets/image/blogimobanco3.jpg" alt="" class="img-fluid imgcover">
                <a href="https://blog.imobanco.com.br/2019/03/21/adiantamento-do-seus-recebiveis-entenda-as-vantagens/" class="text-decoration-none" target="_blank"><h3 class="text-white text-titulo text-left mt-2 mb-0">Adiantamento do seus recebíveis: Entenda as vantagens</h3></a>
                <p class="text-white text-justify text-subtitulo mt-2">Com a unica opção de ter seus recebíveis apenas no futuro, alguns empreendedores recorrem ao cheque especial...</p>
            </div>
            
            <div class="col-lg-12 text-center">
                 <a class="mt-5 btn btn-outline-light btn-radius" href="#" role="button">Leia mais notícias <i class="fas fa-angle-right"></i></a>
            </div>
            </div>
	</div>
	</section>
</template>

<script>
import Blogitem from '@/components/index/blog/Blogitem.vue'

export default {
  components: {
    Blogitem
  }
}
	
</script>

<style>
	
</style>
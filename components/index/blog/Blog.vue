<template>
	<section class="bg-white">
    <div class="container">
		<div class="row pt-4 pb-4">
            <div class="col-lg-6">
                <h3 class="mt-5 text-secondary text-titulo">Notícias - blog</h3>
                <p class="text-cinza text-subtitulo mt-1 mb-1">Notícias sobre - Boleto, Cobranças, E-Commerce</p>
            </div>
            <div class="col-lg-6 text-right">
                 <a class="mt-5 btn btn-info btn-radius" href="#" role="button">Acessar o Blog <i class="fas fa-angle-right"></i></a>
            </div>
			<div class="col-lg-4 col-md-6">
                <img src="~/assets/image/blogimobanco1.jpg" alt="" class="img-fluid">
                <a href="http://blog.imobanco.com.br/2020/02/11/tendencias-para-o-mercado-imobiliario-em-2020/" target="_blank"><h6 class="text-cinza text-titulo text-left mt-2 mb-0">Tendências para o mercado imobiliário em 2020</h6></a>
                <p class="text-cinza text-justify text-subtitulo mt-2">Como previsto ainda no segundo semestre de 2019, a economia brasileira timidamente cresceu, diminuindo a especulação e atraindo novos investidores.</p>
			</div>
            <div class="col-lg-4 col-md-6">
                <img src="~/assets/image/blogimobanco2.jpg" alt="" class="img-fluid">
                <a href="https://blog.imobanco.com.br/2019/08/12/tecnologia-aplicada-ao-universo-imobanco/" target="_blank"><h6 class="text-cinza text-titulo text-left mt-2 mb-0">Tecnologia aplicada ao Universo Imobanco
</h6></a>
                <p class="text-cinza text-justify text-subtitulo mt-2">O termo Universo Imobanco surgiu para explicar o conjunto de departamentos que englobam o Imobanco: Recebíveis, Cobrança, Fomento e toda tecnologia aplicada...</p>
            </div>
            <div class="col-lg-4 col-md-6">
                <img src="~/assets/image/blogimobanco3.jpg" alt="" class="img-fluid">
                <a href="https://blog.imobanco.com.br/2019/03/21/adiantamento-do-seus-recebiveis-entenda-as-vantagens/" target="_blank"><h6 class="text-cinza text-titulo text-left mt-2 mb-0">Adiantamento do seus recebíveis: Entenda as vantagens</h6></a>
                <p class="text-cinza text-justify text-subtitulo mt-2">Com a unica opção de ter seus recebíveis apenas no futuro, alguns empreendedores recorrem ao cheque especial...</p>
            </div>
            
            <div class="col-lg-12 text-center">
                 <a class="mt-5 btn btn-outline-info btn-radius" href="#" role="button">Leia mais notícias <i class="fas fa-angle-right"></i></a>
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
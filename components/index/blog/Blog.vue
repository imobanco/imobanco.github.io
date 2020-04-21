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
			    <div class="col-lg-4 col-md-6">
                <blogitem
                category="Imobanco"
                image="https://blog.imobanco.com.br/wp-content/uploads/2020/04/SISTEMA-IMOBANCO.png"
                url="https://blog.imobanco.com.br/2020/04/13/vantagens-de-ser-imobanco/"
                title="Vantagens de ser Imobanco"
                content="As soluções Imobanco foram desenvolvida pensando na autonomia dos usuários, isso significa total controle e segurança na gestão de recebimentos e cobrança."
                />
			    </div>
            <div class="col-lg-4 col-md-6">
               <blogitem
                category="Contrato"
                image="https://blog.imobanco.com.br/wp-content/uploads/2020/03/61_Easy-Resize.com_-690x400.jpg"
                url="https://blog.imobanco.com.br/2020/03/03/olhar-sobre-o-projeto-de-lei-2-474-2019/"
                title="Olhar sobre o projeto de lei 2.474/2019"
                content="Visando o aumento da arrecadação de aluguéis, inúmeros proprietários de imóveis buscam acessar plataformas de locação de temporada, a exemplo do AirBNB, o que vem gerando..."
                />
            </div>
            <div class="col-lg-4 col-md-6">
               <blogitem
                category="Dicas | Franquias"
                image="https://blog.imobanco.com.br/wp-content/uploads/2019/08/97_Easy-Resize.com_-690x400.jpg"
                url="https://blog.imobanco.com.br/2019/08/19/como-escolher-uma-franquia-de-sucesso/"
                title="Como escolher uma franquia de sucesso"
                content="Nos últimos anos, no Brasil, o setor de Franchising tem crescido exponencialmente a cada ano. Segundo a ABF (Associação Brasileira de Franchising) o setor cresceu 8% nos últimos quatro anos, em..."
                />
            </div>
            
            <div class="col-lg-12 text-center">
                 <a href="https://blog.imobanco.com.br/" target="_blank" class="mt-5 btn btn-outline-dark btn-radius" role="button">Leia mais notícias <i class="fas fa-angle-right"></i></a>
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
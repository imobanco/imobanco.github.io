<template>
		<section class="bg-primary bg-newsletter">
		<div class="container">
		<div class="row justify-content-center">
      
      <div class="col-lg-12 text-center">
                <h2 class="mt-2 text-white text-titulo text-center">"Mais importante que te dar tecnologia é promover a solução de teus problemas!"</h2>
                <p class="text-white text-content">Fernando Colares - CEO Imobanco</p>
                <hr>
      </div>
			
      <div class="col-lg-6 text-center">
                <newsinfo 
                icone="fas fa-envelope"
                title="Assine nossa Newsletter"
                content="Cadastre-se e receba o conteúdo especial que preparamos para você!" />
			</div>
            
            <div class="col-lg-6 text-center pt-3 mt-2">
            	<newscadastro />
            </div>
        </div>
	</div>
	</section>
</template>

<script>
import Newsinfo from '@/components/index/newsletter/Newsinfo.vue'
import Newscadastro from '@/components/index/newsletter/Newscadastro.vue'

export default {
  components: {
    Newsinfo,
    Newscadastro
  }
}
	
</script>

<style>
	.bg-newsletter{
		/* background-image: url("~assets/image/bgpn3.png") !important;
    background-repeat:repeat; */
		padding-top: 20px;
		padding-bottom: 20px;
		/*background: rgb(4,95,170);
	    background: -webkit-linear-gradient(left, rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);
	    background: -o-linear-gradient(left,  rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);
	    background: linear-gradient(to right, rgba(2,45,96,1) 0%, rgba(4,95,170,1) 100%);*/
	}
</style>
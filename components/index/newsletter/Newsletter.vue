<template>
		<section class="bg-imobanco">
		<div class="container">
		<div class="row">
      
      <div class="col-lg-12 text-center">
                <h5 class="mt-2 imo-text-08 text-subtitulo text-center font-italic">"Mais importante que te dar tecnologia é promover a solução de teus problemas!"</h5>
                <p class="imo-text-07 font-italic">Fernando Colares - CEO Imobanco</p> 
      </div>
			
      <div class="col-lg-6 text-center">
                <newsinfo 
                icone="fas fa-envelope"
                contentnews="Assine nossa"
                title="Newsletter"
                content="Cadastre-se e receba o conteúdo especial que preparamos para você!" />
			</div>
            
            <div class="col-lg-6 text-center pt-3">
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
	
</style>
<template>

<section class="imobanco-color-05 pt-3 pb-3">
		<div class="container">
			
      <div class="row pt-2 pb-2">
          <div class="col-lg-12 text-left mb-0 p-0 ml-0">
            <h3 class="mt-5 mb-0 pl-0 text-titulo text-imobanco">Serviços</h3>
          </div>
        
      </div>
      
      <div class="row">
        <div class="col-xs-12 col-sm-4 col-lg-3 mt-0 p-0">
                <p class="text-content text-imobanco mt-0 p-0">Oferecemos uma gama completa de serviços para
                <strong class="text-titulo"> gestão financeira</strong> do seu negócio</p>
        </div>
      </div>
      <div class="row ">
                <div class="col-xs-12 col-sm-4 col-lg-4 p-2 text-center">
                          <img src="~assets/image/boletoicon.png" alt="" class="img-fluid" style="width: 60px; height: 60px;">
                          <content-servicos
                                          title="Boletos"
                                          content="Emita, Registre e gerencie seus boletos. Tudo de forma simplificada e sem burocracia. Com o Imobanco você tem tudo isso ao seu alcance na palma da sua mão." />
                 
                </div>
                <div class="col-xs-12 col-sm-4 col-lg-4 p-2 text-center">
                   
                        <img src="~assets/image/ecommerceicon.png" alt="" class="img-fluid" style="width: 60px; height: 60px;">
                          <content-servicos
                                       
                                          title="E-Commerce"
                                          content="Sua loja 60% integrada a gestão inteligente de recebimentos e cobrança Imobanco. Sem tarifas de manutenção e com você no controle de tudo." />
                                   
                  </div>

                  <div class="col-xs-12 col-sm-4 col-lg-4 p-2 text-center">
                        <img src="~assets/image/cobrancasicon.png" alt="" class="img-fluid" style="width: 60px; height: 60px;">
                        <content-servicos
                                         
                                          title="Cobranças"
                                          content="Feita de forma estratégica, baseada em dados de comportamento dos seus devedores. Isso significa assertividade e otimização nos esforços de cobrança." />
                 
                  </div>
                </div>
            </div>
	</section>

</template>
<script>

import ContentServicos from '~/components/ContentServicos.vue'

export default {
  components: {
    ContentServicos
  }
}
</script>

<style>
.img-area{
    background-color: #304ffe;
}
.card-top{
 border-top: 6px solid #304ffe !important;
 border-radius: 30px 30px 0 0;
}
.row-radius{
  border-radius: 30px 2px 30px 2px;
}    
    
   
</style>

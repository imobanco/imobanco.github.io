<template>

<section class="bg-white">
  <div class="container-fluid bg-dark">
    <div class="row justify-content-center pt-5 pb-5">
          <div class="col-lg-8 text-center mb-0 p-0 ml-0">
            <h2 class="mt-4 mb-0 pl-0 text-titulo text-white">Serviços</h2>
            <h4 class="text-content text-success mt-0 p-0">Oferecemos uma gama completa de serviços para
            <strong class="text-titulo"> gestão financeira</strong> do seu negócio</h4>
          </div>
      </div>
  </div>
		<div class="container-fluid pt-5 pb-5">
      <div class="row">
        <div class="col-xs-12 col-sm-4 col-lg-6 mt-0 p-5">
          <div class="row">
            <div class="col-lg-3">
              <img src="~assets/image/icon-boletos.png" alt="" class="img-fluid" style="width: 120px; height: 120px;">
            </div>
            <div class="col-lg-9 pt-4">
              <content-servicos
                  title="Boletos"
                  content="Emita, Registre e gerencie seus boletos." />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3">
              <img src="~assets/image/icon-ecommerce.png" alt="" class="img-fluid" style="width: 120px; height: 120px;">
            </div>
            <div class="col-lg-9 pt-4">
              <content-servicos
                title="E-Commerce"
                content="Sua loja 60% integrada a gestão inteligente de recebimentos e cobrança Imobanco." />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3">
              <img src="~assets/image/icon-cobrancas.png" alt="" class="img-fluid" style="width: 120px; height: 120px;">
            </div>
            <div class="col-lg-9 pt-4">
              <content-servicos
                title="Cobranças"
                content="Feita de forma estratégica, baseada em dados de comportamento dos seus devedores." />
            </div>
          </div>

        </div>

        <div class="col-xs-12 col-sm-4 col-lg-6 mt-0 p-5 bg-servicos bg-imobanco">
              
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
.bg-servicos{
        background-image: url("~assets/image/bgsolucoes.jpg")!important ; 
        background-size: 100% auto cover;
        background-position: center top;
        background-repeat: no-repeat;
    }
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

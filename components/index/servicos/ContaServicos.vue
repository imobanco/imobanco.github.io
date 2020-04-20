<template>
    <section class="">
        <div class="container servicoestiloright">
            <div class="row">
                 <div class="col-lg-6">Imagem</div>
                <div class="col-lg-6 col-md-6 col-sm-10 pt-5 pb-5">
                    
                    <titulo-servicos 
                    titulo="E-commerce"
                    resumo="Sua loja 60% integrada a gestão inteligente de recebimentos e cobrança Imobanco."/>

                    <div class="row">
                        <div class="col-lg-6">
                            <p class="text-white"><span class="text-success"><i class="material-icons">description</i></span> conteudo inicial do começo ao fim só besteira escrevendo</p>
                        </div>
                        <div class="col-lg-6">
                            <p class="text-white"><span class="text-success"><i class="material-icons">description</i></span> conteudo inicial do começo ao fim só besteira escrevendo</p>
                        </div>
                        <div class="col-lg-6">
                            <p class="text-white"><span class="text-success"><i class="material-icons">description</i></span> conteudo inicial do começo ao fim só besteira escrevendo</p>
                        </div>
                        <div class="col-lg-6">
                            <p class="text-white"><span class="text-success"><i class="material-icons">description</i></span> conteudo inicial do começo ao fim só besteira escrevendo</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
</template>

<script>
   import TituloServicos from '~/components/index/servicos/TituloServicos.vue'
    export default {
        components: {
        TituloServicos
  }
    }
</script>

<style lang="scss" scoped>

.servicoestiloright{
    border-right: 7px #21e6c1 solid;
    border-radius: 30px 0px 30px 0px;
    border-bottom: 7px #21e6c1 solid;
    
}

</style>
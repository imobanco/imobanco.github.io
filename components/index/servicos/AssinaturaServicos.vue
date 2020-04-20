<template>
    <section class="">
        <div class="container servicoestiloright">
            <div class="row">
                <div class="col-lg-6">
                     <img src="~/assets/image/muckup-01.png" alt="" class="img-fluid">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-10 pt-5 pb-5">
                    
                    <titulo-servicos 
                    class="text-primary"
                    icon="edit"
                    titulo="Assinatura"
                    resumo="Feita de forma estratégica, baseada em dados de comportamento dos seus devedores."/>

                    <div class="row">
                        <div class="col-lg-6">
                            <p class="text-primary"><span class="text-success"><i class="material-icons">description</i></span> conteudo inicial do começo ao fim só besteira escrevendo</p>
                        </div>
                        <div class="col-lg-6">
                            <p class="text-primary"><span class="text-success"><i class="material-icons">description</i></span> conteudo inicial do começo ao fim só besteira escrevendo</p>
                        </div>
                        <div class="col-lg-6">
                            <p class="text-primary"><span class="text-success"><i class="material-icons">description</i></span> conteudo inicial do começo ao fim só besteira escrevendo</p>
                        </div>
                        <div class="col-lg-6">
                            <p class="text-primary"><span class="text-success"><i class="material-icons">description</i></span> conteudo inicial do começo ao fim só besteira escrevendo</p>
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
    background-image: url("~assets/image/arrowright-blue.png");
    background-repeat: no-repeat;
    background-position: top right;
    // border-right: 7px #21e6c1 solid;
    // border-radius: 30px 0px 30px 0px;
    // border-bottom: 7px #21e6c1 solid;
}

</style>
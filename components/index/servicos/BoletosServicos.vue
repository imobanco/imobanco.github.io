<template>
    <section class="">
        <div class="container servicoestiloleft">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-10 pt-5 pb-5">
                    
                    <titulo-servicos
                    class="text-white"
                    icon="description" 
                    titulo="Boletos"
                    resumo="Emita, Registre e gerencie seus boletos."/>

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
                <div class="col-lg-6">
                    <img src="~/assets/image/muckup-01.png" alt="" class="img-fluid">
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

.servicoestiloleft{
    // border-left: 7px #21e6c1 solid;
    // border-radius: 0px 0px 0px 30px;
    // border-bottom: 7px #21e6c1 solid;
    
}

</style>
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
                            <p class="text-white text-justify"><span class="text-success"><i class="material-icons" style="font-size: 13px !important;">lens</i></span> Emita boletos e envie por e-mail gratuitamente. Nosso sistema enviará automaticamente os lembretes de vencimento para seus clientes.</p>
                        </div>
                        <div class="col-lg-6">
                            <p class="text-white text-justify"><span class="text-success"><i class="material-icons" style="font-size: 13px !important;">lens</i></span> Acompanhe o seu cliente - Visualize quando o seu cliente abre os e-mails e faturas enviadas por você.</p>
                        </div>
                        <div class="col-lg-6">
                            <p class="text-white text-justify"><span class="text-success"><i class="material-icons" style="font-size: 13px !important;">lens</i></span> Seja cobrado apenas pelas cobranças que forem pagas</p>
                        </div>
                        <div class="col-lg-6">
                            <h5 class="text-titulo"><span class="text-warning"><i class="material-icons" style="font-size: 20px !important;">local_offer</i></span> <strong class="text-warning">Recurso exclusivo Imobanco: </strong></h5>
                            <p class="text-white text-justify"> Cadastre seu boleto individual ou contrato de parcelas a receber, juntamente com o plano de divisão de valor, se for necessário. Com a liquidação do boleto, nosso sistema já transfere os valores planejados imediatamente.</p>
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
.icon-index{
    width: 10px;
    height: 10px;
}
.servicoestiloleft{
    // border-left: 7px #21e6c1 solid;
    // border-radius: 0px 0px 0px 30px;
    // border-bottom: 7px #21e6c1 solid;
    
}

</style>
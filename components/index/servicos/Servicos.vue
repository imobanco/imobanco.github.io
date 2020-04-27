<template>
    <div>
       <conta-servicos 
        class="bg-dark"/>
        <boletos-servicos 
        class="bg-medium"/>
        <assinatura-servicos 
        class="bg-gray-50"/>
        <ecommerce-servicos 
        class="bg-medium"/>
        <cobranca-servicos 
        class="bg-gray-50"/>
       
    </div>
</template>

<script>
import BoletosServicos from '~/components/index/servicos/BoletosServicos.vue'
import AssinaturaServicos from '~/components/index/servicos/AssinaturaServicos.vue'
import EcommerceServicos from '~/components/index/servicos/EcommerceServicos.vue'
import CobrancaServicos from '~/components/index/servicos/CobrancaServicos.vue'
import ContaServicos from '~/components/index/servicos/ContaServicos.vue'
    export default {
        components: {
        BoletosServicos,
        AssinaturaServicos,
        EcommerceServicos,
        CobrancaServicos,
        ContaServicos,
  }
    }
</script>

<style lang="scss" scoped>

</style>
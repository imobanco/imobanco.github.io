<template>
    <div>
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
    export default {
        components: {
        BoletosServicos,
        AssinaturaServicos,
        EcommerceServicos,
        CobrancaServicos,
  }
    }
</script>

<style lang="scss" scoped>
body::-webkit-scrollbar {
  width: 1em;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>
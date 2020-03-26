<template>
    <div>
    <payer-slide />
    <payer-billet />
    <payer-content />
    </div> 
</template>

<script>
import PayerSlide from '~/components/payer/PayerSlide.vue';
import PayerContent from '~/components/payer/PayerContent.vue';
import PayerBillet from '~/components/payer/PayerBillet.vue';

export default {
  components: {
    PayerSlide,
    PayerBillet,
    PayerContent

  }
}
</script>

<style>

</style>
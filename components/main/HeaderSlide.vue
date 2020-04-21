<template>
<section class="slidemobile mt-0">
  <div class="container">
    <div class="row justify-content-left">
      <div class="col-lg-2 col-md-3 col-sm-3 pt-2 pl-0 pb-0 pr-0 bg-white rounded">
            <ul class="">
              <router-link to="/" class="text-cinza text-content p-3 text-decoration-none effect"> Home</router-link>
              <hr class="linestyle-sidebar mt-1 mb-1">
              <router-link to="/slip" class="text-cinza text-content p-3 text-decoration-none effect"> Boleto</router-link>
                <hr class="linestyle-sidebar mt-1 mb-1">
              <router-link to="/ecommerce" class="text-cinza text-content p-3 text-decoration-none effect">E-Commerce</router-link>
              <hr class="linestyle-sidebar mt-1 mb-1"> 
              <router-link to="/charges" class="text-cinza text-content p-3 text-decoration-none effect">Cobranças</router-link>
              <hr class="linestyle-sidebar mt-1 mb-1">
              <a href="https://blog.imobanco.com.br/" class="text-cinza text-content p-3 text-decoration-none effect" target="_blank">Blog</a>
              <hr class="linestyle-sidebar mt-1 mb-1">
              <router-link to="/contact" class="text-cinza text-content p-3 text-decoration-none effect">Contato</router-link>
            </ul>
             <div class="bg-medium pt-2 pb-2 text-center"><a href="https://blog.imobanco.com.br/" class="text-primary pl-2 text-titulo-sidebar  text-white text-decoration-none effect" target="_blank"><i class="far fa-arrow-alt-circle-right"></i> Seja Cliente</a>
            </div>
      </div>
      
    </div>
  </div>

</section>
</template>

<script>
  
  

  export default {
  components: {
   

  }
}
</script>

<style>

.slidemobile{
        height: 750px;
        background-image: url("~assets/image/banner-modelo.jpg") !important;
        background-color: #9c9c9c;
        background-size: 100% auto cover;
        background-position: center center;
        background-repeat: no-repeat;
}
  
</style>
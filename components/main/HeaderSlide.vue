<template>
<section class="slidemobile">
  <div class="container">
    <div class="row justify-content-left">
      <div class="col-lg-8 ml-0 pl-0">
            <div class="col-lg-3 col-xl-2  col-md-3 col-sm-3 pt-2 pl-0 pb-0 pl-0  bg-cinza">
            <ul class="pl-2">
              <router-link to="/" class="text-primary text-titulo-sidebar p-2 text-decoration-none effect"> Home</router-link>
              <hr class="linestyle-sidebar">
              <router-link to="/slip" class="text-primary text-titulo-sidebar p-2 text-decoration-none effect"> Boleto</router-link>
                <hr class="linestyle-sidebar">
              <router-link to="/ecommerce" class="text-primary text-titulo-sidebar p-2 text-decoration-none effect">E-Commerce</router-link>
              <hr class="linestyle-sidebar"> 
              <router-link to="/charges" class="text-primary text-titulo-sidebar p-2 text-decoration-none effect">Cobranças</router-link>
              <hr class="linestyle-sidebar">
              <a href="https://blog.imobanco.com.br/" class="text-primary text-titulo-sidebar p-2 text-decoration-none effect" target="_blank">Blog</a>
              <hr class="linestyle-sidebar">
              <router-link to="/contact" class="text-primary text-titulo-sidebar p-2 text-decoration-none effect">Contato</router-link>
            </ul>
             <div class="bg-medium pt-2 pb-2"><a href="https://blog.imobanco.com.br/" class="text-primary p-2 text-titulo-sidebar  text-white text-decoration-none effect" target="_blank"><i class="far fa-arrow-alt-circle-right"></i> Seja Cliente</a>
            </div>
            </div>
      </div>
      
    </div>
  </div>

</section>

 
</template>

<style>
/* .font-size{
  font-size: calc(1.7vw + 3vmin);

}
.icon-style{
  width: 20px;
  height: 20px;
} */
.slidemobile{
        height: 700px;
        /* background-image: url("~assets/image/banner4.jpg") !important; */
        background-color: #9c9c9c;
        background-size: 100% auto cover;
        background-position: center;
        background-repeat: no-repeat;
}
  
</style>
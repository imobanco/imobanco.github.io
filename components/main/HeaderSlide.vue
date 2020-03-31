<template>
<section class="slidemobile">
  <div class="container">
    <div class="row justify-content-left">
      <div class="col-lg-8 ml-0 pl-0">
            <div class="col-lg-6 col-xl-2  col-md-3 col-sm-3 col-5 pt-2  bg-cinza">
            <ul class="nav flex-column">
              <router-link to="/" class="text-primary text-titulo-sidebar text-decoration-none effect"><img src="~assets/image/home-icon.png" alt="" class="icon-style"> Home</router-link>
              <hr class="linestyle-sidebar">
              <router-link to="/slip" class="text-primary text-titulo-sidebar text-decoration-none effect"><img src="~assets/image/slip-icon.png" alt="" class="icon-style"> Boleto</router-link>
                <hr class="linestyle-sidebar">
              <router-link to="/ecommerce" class="text-primary text-titulo-sidebar text-decoration-none effect"><img src="~assets/image/ecommerce-icon.png" alt="" class="icon-style"> E-Commerce</router-link>
              <hr class="linestyle-sidebar"> 
              <router-link to="/charges" class="text-primary text-titulo-sidebar text-decoration-none effect"><img src="~assets/image/ecommerce-icon.png" alt="" class="icon-style"> Cobranças</router-link>
              <hr class="linestyle-sidebar">
              <a href="https://blog.imobanco.com.br/" class="text-primary text-titulo-sidebar text-decoration-none effect" target="_blank"><img src="~assets/image/ecommerce-icon.png" alt="" class="icon-style"> Blog</a>
              <router-link to="/contact" class="text-primary text-titulo-sidebar bg-medium text-decoration-none text-white effect"><img src="~assets/image/ecommerce-icon.png" alt="" class="icon-style"> Contato</router-link>
            </ul>
            </div>
      </div>

      <!-- <div class="col-lg-5">AQUI</div> -->
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
        height: 600px;
        background-image: url("~assets/image/banner4.jpg") !important;
        background-color: #9c9c9c;
        background-size: 100% auto cover;
        background-position: center;
        background-repeat: no-repeat;
}
  
</style>
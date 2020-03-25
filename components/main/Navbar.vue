<template>
    <section class="color-mute">
    <div class="container p-0">       
          <nav>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
              <i class="fas fa-bars"></i>
            </label>
            <label><router-link to="/" class="logo"><img src="~assets/image/imobanco-azul.png" alt=""></router-link></label>
            <ul>
              <li><router-link to="/" class="active  text-titulo-sidebar">Credor</router-link></li>
              <li><router-link to="/" class="text-titulo-sidebar">Pagador</router-link></li>
              <li><router-link to="/" class="text-titulo-sidebar">Franqueado</router-link></li>
              <li><router-link to="/slip" class="text-titulo-sidebar">Login</router-link></li>
              <li> <router-link to="/slip" class="text-titulo-sidebar">Registro</router-link></li>
            </ul>
          </nav>
          
           <!-- <b-navbar toggleable="lg" type="dark">
              <router-link to="/" class="navbar-brand"><img src="~assets/image/imobanco-azul.png" alt=""></router-link>
              <b-navbar-toggle target="nav-collapse" class="bg-imobanco"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
              <ul class="navbar-nav">
                  <router-link to="/" class="text-white text-content text-decoration-none effect">Home</router-link>
                  <hr class="linestyle">
                  <router-link to="/slip" class="text-white text-content text-decoration-none effect">Institucional</router-link>
                 <hr class="linestyle">
                  <router-link to="/slip" class="text-white text-content text-decoration-none effect">Soluções</router-link>
                  <hr class="linestyle">
                  <router-link to="/slip" class="text-white text-content text-decoration-none effect">Boleto</router-link>
                  <hr class="linestyle">
                  <router-link to="/ecommerce" class="text-white text-content text-decoration-none effect">E-Commerce</router-link>
                  <hr class="linestyle">
                  <router-link to="/charges" class="text-white text-content text-decoration-none effect">Cobranças</router-link>
                  <hr class="linestyle">
                  <router-link to="/charges" class="text-white text-content text-decoration-none effect">Webinar</router-link>
                  <hr class="linestyle">
                  <a href="https://blog.imobanco.com.br/" class="text-white text-content text-decoration-none effect" target="_blank">Blog</a>
                  <hr class="linestyle">
                  <router-link to="/contact" class="text-white text-content text-decoration-none effect">Contato</router-link>
              </ul> 
              </b-navbar-nav>
              </b-collapse>
            </b-navbar> -->
    </div>
    </section>
</template>

<style>
.navbar-imobanco{
  display: block;
  background-color: #f5f5f5;
  padding: 10px;
  margin-left: 5px;
  margin-right: 5px;
}
.navbar-login{
  display: block;
  color: #ffffff;
  background-color: #003e69;
  padding: 10px;
   margin-left: 5px;
  margin-right: 5px;
}
.navbar-registro{
  display: block;
  color: #003e69;
  background-color: #ffffff;
  border: 1px solid #003e69;
  padding: 10px;
   margin-left: 5px;
  margin-right: 5px;
}
.color-mute{
    background-color: #f5f5f5;
    border-bottom: 2px solid rgb(4,95,170);
    }
</style>

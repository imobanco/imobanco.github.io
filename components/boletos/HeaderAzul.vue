<template>
   <!--<NavSecondary/>-->
   <div class="bg-azul">
   <div class="container pt-3">
   <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
                <img src="../../static/image/logoimobanco.png" alt="" class="img-fluid">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                          <li class="nav-item">
                            <a class="nav-link text-white" href="#noticias">Início</a>
                          </li>
                          <li class="nav-item ">
                            <a class="nav-link  text-white" href="#eventos">Boleto
                              <span class="sr-only">(current)</span>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-white" href="#sobre">E-commerce</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-white" href="#certificados">Planos</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-white" href="#parceiros">Imprensa</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-white" href="#contato">Contato</a>
                          </li>
                          <v-spacer></v-spacer>
                          <li class="nav-item">
                            <button class="btn btn-light btn-block my-2 my-sm-0" type="submit">Cadastre-se</button> 
                          </li>
                </ul>    
            </div>
        </nav>
        </div>
        </div>
</template>
<script>
//import NavbarSecondary from "../main/NavbarSecondary";
export default {

  components:{
//    NavbarSecondary
  }
  
}
</script>

<style lang="scss" scoped>
    .btn-primary{
       background-color: #003F69;
    }
    .bg-azul{
       background-color: #003F69;
    }
</style>
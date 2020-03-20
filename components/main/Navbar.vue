<template>
    <section class="color-mute">
    <div class="container p-0">
      <div class="row">
        <div class="col-lg-12">
           <b-navbar toggleable="lg" type="dark">
              <router-link to="/" class="navbar-brand"><img src="~assets/image/imobanco-azul.png" alt=""></router-link>
              <b-navbar-toggle target="nav-collapse" class="bg-imobanco"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
               
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                  <router-link to="/" class="text-secondary text-titulo-sidebar navbar-imobanco text-decoration-none effect">Credor</router-link>
                  
                  <router-link to="/slip" class="text-secondary text-titulo-sidebar navbar-imobanco text-decoration-none effect">Devedor</router-link>
                  
                  <router-link to="/slip" class="text-secondary text-titulo-sidebar navbar-imobanco text-decoration-none effect">Franqueado</router-link>
                    
                  <router-link to="/slip" class="text-titulo-sidebar navbar-login text-decoration-none effect">Login</router-link>
                    
                  <router-link to="/slip" class="text-secondary text-titulo-sidebar navbar-registro text-decoration-none effect">Registro</router-link>

                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
      </div>
      </div>
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

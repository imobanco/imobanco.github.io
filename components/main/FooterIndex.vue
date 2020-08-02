<template>
  <section class="bg-primary pt-5 pb-5">
    <b-container>
      <b-row>
        <b-col cols="12" md="12" lg="3" class="text-left">
          <router-link to="/" class="navbar-brand">
            <img src="~assets/image/logoimobanco.png" alt />
          </router-link>
        </b-col>
        <b-col cols="6" md="4" lg="3" class="text-left">
          <h5 class="text-white">Imobanco</h5>
          <p class="mt-0 mb-0">
            <a href="#" class="text-white">Blog</a>
          </p>
          <p class="mt-0 mb-0">
            <a href="#" class="text-white">Desenvolvedores</a>
          </p>
          <p class="mt-0 mb-0">
            <a href="#" class="text-white">Faq</a>
          </p>
          <p class="mt-0 mb-0">
            <a href="#" class="text-white">Manual</a>
          </p>
          <p class="mt-0 mb-0">
            <a href="#" class="text-white">Ouvidoria</a>
          </p>
          <p class="mt-0 mb-0">
            <a href="#" class="text-white">Política E-Commerce</a>
          </p>
          <p class="mt-0 mb-0">
            <a href="#" class="text-white">Política de Privacidade</a>
          </p>
          <p class="mt-0 mb-0">
            <a href="#" class="text-white">Trabalhe Conosco</a>
          </p>
        </b-col>
        <b-col cols="6" md="4" lg="3" class="text-left">
          <h5 class="text-white">Soluções</h5>
          <p class="mt-0 mb-0">
            <router-link to="/boletos" class="text-white text-decoration-none">Boleto</router-link>
          </p>
          <p class="mt-0 mb-0">
            <router-link to="/charges" class="text-white text-decoration-none">Cobrança</router-link>
          </p>
          <p class="mt-0 mb-0">
            <router-link to="/ecommerce" class="text-white text-decoration-none">E-Commerce</router-link>
          </p>
          <br />
          <h5 class="text-white">Ajuda e Suporte:</h5>
          <p class="mt-0 mb-0">
            <a href="https://t.me/imobancobot" class="text-white text-decoration-none">
              <img src="~/assets/image/telegram.png" alt class="ml-1 mr-1" />
              <span class="pt-2">Chat Imobanco: 24h online</span>
            </a>
          </p>
        </b-col>
        <b-col cols="12" md="4" lg="3">
          <h5 class="text-white">Redes Sociais:</h5>
          <p class="text-white text-content mt-2">
            <span class="text-content">
              <a href="https://www.facebook.com/imobanco/" target="_blank">
                <img src="~/assets/image/facebook.png" alt class="ml-1 mr-1" />
              </a>
              <a href="https://www.instagram.com/imobanco/" target="_blank">
                <img src="~/assets/image/instagram.png" alt class="ml-1 mr-1" />
              </a>
              <a href="https://twitter.com/imobanco" target="_blank">
                <img src="~/assets/image/twitter.png" alt class="ml-1 mr-1" />
              </a>
            </span>
          </p>
          <h5 class="text-white">Conta com a gente:</h5>
          <p class="text-white text-content mt-2">
            Quaisquer esclarecimentos e dúvidas, entre em contato conosco e
            <span
              class="text-success"
            >#vemvocêtambém</span> ser Imobanco.
          </p>
        </b-col>
        <b-col cols="12" md="12" lg="12" class="text-center">
          <hr />
          <p class="text-white text-content mt-3">Imobanco 2020 © - Todos os direitos reservados.</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
</script>

<style>
</style>
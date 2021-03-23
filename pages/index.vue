<template>
  <div>
    <!--<navbar-mobile />
    <header-slide />
    <persona-section />
    <services-section />
    <facilidades-item />
    <chat-comercial />-->
    <Header/>
    <MainSection/>
    <Parceiro/>
    <ecommerce-chamada cor_titulo="#363636" cor_subtitulo="#363636" cor_botao="white" cor_texto_botao="#363636"/>
    <Noticias/>
    
  </div>
</template>

<script>
/*import NavbarMobile from "@/components/main/NavbarMobile.vue";
import HeaderSlide from "~/components/main/HeaderSlide.vue";
import PersonaSection from "~/components/index/persona/PersonaSection.vue";
import FacilidadesItem from "~/components/index/facilidadesimobanco/FacilidadesItem.vue";
import ServicesSection from "~/components/index/services/ServicesSection.vue";
import ChatComercial from "~/components/index/chatcomercial/ChatComercial.vue";*/
import MainSection from "../components/inicio/MainSection";
import Header from "../components/inicio/Header";
import Parceiro from "../components/inicio/Parceiro";
import EcommerceChamada from "@/components/ecommerce/EcommerceChamada.vue";
import Noticias from "../components/inicio/Noticias";

export default {
  components: {
    MainSection,
    Header,
    Parceiro,
    EcommerceChamada,
    Noticias,

    /*NavbarMobile,
    HeaderSlide,
    PersonaSection,
    FacilidadesItem,
    ServicesSection,
    ChatComercial,*/
  },
};
</script>
<style></style>

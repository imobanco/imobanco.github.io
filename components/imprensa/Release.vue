<template>
  <b-row>
    <b-col cols="12" md="12" lg="12" class="text-left">
      <p
        style="font-size:12px"
      >Entrevista {{release['data']['data'].split('-').reverse().join('/')}}</p>
    </b-col>
    <b-col cols="12" md="12" lg="3" class="text-left">
      <img src="image/bg-imo.jpg" alt class="img-fluid pb-3" />
    </b-col>
    <b-col cols="12" md="12" lg="9" class="text-left">
      <a :href="link+release['id']" style="color:#121421">
        <h5>{{release['data']['titulo'][0]['text']}}</h5>
      </a>
      <p>{{release['data']['conteudo'][0]['text']}}</p>
      <a :href="link+release['id']" class="text-success" style="font-size: 14px;">Leia mais</a>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: ["release"],
  data() {
    return {
      link: "/release-single/?post_id="
    };
  }
};
</script>
<style lang="scss" scoped>
.except-post {
  font-size: 12px;
}
.data-post {
  font-size: 11px;
}
.link-post {
  font-size: 12px;
}
p {
  font-size: 18px;
}
a {
  text-decoration: none;
}
img {
  height: 120px;
}
</style
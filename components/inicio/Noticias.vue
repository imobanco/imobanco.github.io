<template>
  <b-row>
    <b-col cols="12" md="12" lg="12" class="mb-3">
      <img :src="post_image" alt class="img-fluid rounded img-thumbnail" />
      <span>
        <a :href="link+post_id" class="text-imobanco text-title">{{post_title}}</a>
      </span>
      <br />
    </b-col>
    
      <b-col cols="12" md="12" lg="12"> <p class="text-content except-post">{{ post_content }}</p>
      <form action="/single">
        <input type="text" :value="post_id" hidden="hidden" name="post_id" />
        <span>
          <a :href="link+post_id" class="text-success link-post">Leia mais</a>
        </span>
      </form>
      </b-col>
    </b-row>
</template>
<script>
export default {
  props: ["post_id", "post_title", "post_image", "post_date", "post_content"],
  data() {
    return {
      link: "/single/?post_id="
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
  // height: 120px;
}
</style>
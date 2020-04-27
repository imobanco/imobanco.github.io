<template>
      <section class="post-list">
          <blogitem
          category="category"
          thumbnail="thumbnail"
          url="link"
          title="title"
          previewText="previewText"
          />
      </section>
</template>

<script>
import Blogitem from '@/components/index/blog/Blogitem.vue'

export default {
  components: {
    Blogitem
  }
}
	
</script>

<style>
	
</style>
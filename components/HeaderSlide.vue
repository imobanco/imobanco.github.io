<template>
<div class="slidemobile">
  <div class="container">
    <div class="row justify-content-left">
      <div class="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-8 pt-2">
       
      </div>
    </div>
  </div>

</div>

 
</template>
<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style>
/* .box {
  width: 180px;
  height: 400px;
  background-color: #212121;
  position: absolute;
  top: 100px;
  left: 210px;
} */
.font-size{
  font-size: calc(1.7vw + 3vmin);

}

.slidemobile{
        height: 500px;
        /* background-image: url("~assets/image/bannerindexslide.jpg") !important; */
        background: rgb(0,47,244);
        background: linear-gradient(0deg, rgba(0,47,244,1) 0%, rgba(14,21,58,1) 100%); 
        background-color: #9c9c9c;
        background-size: 100% auto cover;
        background-position: center;
        background-repeat: no-repeat;
}
  
</style>
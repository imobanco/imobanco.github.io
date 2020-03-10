<template>
	
	<div>
		<img src="assets/image/blog.png" alt="" class="img-fluid">
        
        <h5 class="text-cinza text-subtitulo mt-0 mb-0">{{ title }}</h5>
        <p class="imo-text-01 text-justify text-content mt-0">{{ content }}</p>
	</div>

</template>

<script>
	export default{
    name: 'Blogitem',
    props: ['title','content','image','contentnews'],
    
}
</script>

<style>
	
</style>
<template>
	<div class="col-lg-4 col-md-6">
        <span class="boxcatindex"> {{ category }} </span>
		<img :src="thumbnail" alt="imobanco" class="img-fluid imgcover">
        <a :href="url" target="_blank" class="text-decoration-none">
        <h3 class="text-gray-300 text-titulo mt-0 mb-0">{{ title }}</h3>
       </a>
        <p class="imo-text-01 text-justify text-content mt-0">{{ previewText }}</p>
	</div>

</template>

<script>
	export default{
    name: 'Blogitem',
    props: ['category','title','previewText','thumbnail','url'],    
}
</script>

<style>
	
</style>
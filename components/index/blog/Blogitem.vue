<template>
	<div>
        <span class="boxcatindex"> {{ category }} </span>
		<img :src="image" alt="imobanco" class="img-fluid imgcover">
        <a :href="url" target="_blank" class="text-decoration-none">
        <h3 class="text-gray-300 text-titulo mt-0 mb-0">{{ title }}</h3>
       </a>
        <p class="imo-text-01 text-justify text-content mt-0">{{ content }}</p>
	</div>

</template>

<script>
	export default{
    name: 'Blogitem',
    props: ['category','title','content','image','url'],    
}
</script>

<style>
	
</style>
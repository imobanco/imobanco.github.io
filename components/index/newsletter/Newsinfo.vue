<template>
	
	<div>
        <h2 class="text-success text-center text-titulo mt-0 mb-0"><i v-bind:class="icone"></i> {{ title }}</h2>
        <p class="text-white text-center text-content mt-0">{{ content }}</p>
	</div>

</template>

<script>
	export default{
    name: 'Newsinfo',
    props: ['title','content','icone','contentnews'],    
}

</script>

<style>
	
</style>
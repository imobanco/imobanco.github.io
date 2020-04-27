<template>
    <div>
            <p class="text-white"><span class="text-success"><i class="material-icons" style="font-size: 13px !important;">{{icon}}</i></span> {{texto}}</p>
    </div>
</template>

<script>
    export default {
        name: 'TextoDetalhe',
        props: ['texto', 'icon'],
    }
</script>

<style lang="scss" scoped>

</style>
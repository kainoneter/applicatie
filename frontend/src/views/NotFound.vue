<template>
    <v-container class="container">
        <h1>{{ $t('404.title') }}</h1>
        <p>{{ $t('404.description') }}</p>
        <v-icon>mdi-cancel</v-icon>
    </v-container>
</template>
<script>
export default {
    name: 'NotFound',
}
</script>
<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        height: 50vh;
    }
    .v-icon{
        font-size: 100px;
    }
</style>
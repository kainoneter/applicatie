<template>
    <v-btn class="menu-btn" @click="path ? $router.push(path) : ''" v-bind="$attrs"><v-icon v-if="icon">{{ icon }}</v-icon>{{ $t(title) }}</v-btn>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        path: String,
        icon: String,
    }
}
</script>
<style scoped>
    .v-btn{
        min-width: 110px;
    }
</style>
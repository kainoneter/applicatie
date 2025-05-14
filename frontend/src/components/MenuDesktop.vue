<template>
    <nav class="container bg-primary">
        <component
        v-for="(route, index) in routes"
        :is="route.children ? 'MenuDropdown' : 'MenuButton'"
        :key="index"
        :title="route.meta.title"
        :icon="route.meta.icon"
        :items="route.children"
        :path="route.path"
        />
        <ThemeButton />
    </nav>
</template>
<script>
import MenuDropdown from './MenuDropdown.vue';
import MenuButton from './MenuButton.vue'
import ThemeButton from './ThemeButton.vue';
export default {
    components: {
        MenuDropdown,
        MenuButton,
        ThemeButton,
    },
    computed: {
        routes(){
            return this.$router.options.routes.filter( route => {
                return route.meta?.show !== false
            });
        }
    }
}
</script>
<style scoped>
    nav{
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px;
        border-radius: 5px;
        margin-top: 10px;
        position: fixed;
        top: 0;
    }

    .nav-btn{
        height: 50px;
        aspect-ratio: 1;
        position: absolute;
        background-color: black;
        margin: 10px;
    }

    .theme-btn{
            margin-left: auto;
    }
</style>
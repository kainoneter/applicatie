<template>
    <v-app>
        <v-app-bar  app>
            <v-container class="container">
                <nav>
                    <component
                    v-for="(route, index) in routes"
                    :is="route.children ? 'MenuDropdown' : 'MenuButton'"
                    :key="index"
                    :title="route.meta.title"
                    :icon="route.meta.icon"
                    :items="route.children"
                    :path="route.path"
                    />
                </nav>
            </v-container>
        </v-app-bar>
        <v-main>
            <router-view v-slot="{ Component, route}">  
                <transition name="fade" mode="out-in">
                    <component :is="Component" :key="route.path" />
                </transition>
            </router-view>
        </v-main>
    </v-app>
</template>

<script>
import MenuDropdown from './components/MenuDropdown.vue';
import MenuButton from './components/MenuButton.vue'
export default {
    components: {
        MenuDropdown,
        MenuButton
    },
    data() {
        return {
            drawer: true,
        }
    },
    computed: {
        routes(){
            return this.$router.options.routes.filter( route => {
                return route.meta?.show !== false
            });
        }
    },
    created(){
        console.log(this.routes)
    }
}
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    nav{
        display: flex;
    }
</style>    
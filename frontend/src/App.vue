<template>
    <v-app>
        <v-app-bar  app>
            <v-container class="container">
                
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
    export default {
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
    methods: {
        toggleDrawer() {
            this.drawer = !this.drawer;
        }
    },
}
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
    .v-toolbar__content{
        display: flex;
        justify-content: center;
    }
    #nav-btn{
        position: absolute;
        right: -80px;
        top: 20px;
    }

    .nav-item{
        
    }
     
    @media(min-width: 1279px){
        #nav-btn{
            display: none;
        }
    }
</style>    
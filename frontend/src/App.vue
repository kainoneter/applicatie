<template>
    <v-app>
        <div :class="this.desktop ? 'container' : ''">
            <component
            :is="this.desktop ? 'MenuDesktop' : 'MenuMobile'"
            />
        </div>
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
import MenuDesktop from './components/MenuDesktop.vue';
import MenuMobile from './components/MenuMobile.vue';
export default {
    components: {
        MenuDesktop,
        MenuMobile
    },
    data(){
        return{
            desktop: window.innerWidth > 768,
        }
    },
    mounted(){
        window.addEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize(){
            return this.desktop = window.innerWidth > 768
        }
    }
}
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: transform 0.2s ease, opacity 0.05s ease;
    }
    .fade-enter-from{
        
    }

    .fade-leave-to {
        opacity: 0;
        transform: translateY(-10px);
    }

    main{
        padding-top: 60px;
    }
</style>    
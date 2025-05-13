<template>
    <div id="container">
        <div class="menu-toggle" @click.stop="toggle"></div>
        <nav class="bg-primary">
            <component
            v-for="(route, index) in routes"
            :is="route.children ? 'MenuDropdown' : 'MenuButton'"
            :key="index"
            :title="route.meta.title"
            :icon="route.meta.icon"
            :items="route.children"
            :path="route.path"
            @click="deactivate"
            />
            <ThemeButton />
        </nav>
    </div>
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
    data(){
        return{
            menu: false,
        }
    },
    computed: {
        routes(){
            return this.$router.options.routes.filter( route => {
                return route.meta?.show !== false
            });
        }
    },
    mounted(){
        document.addEventListener('click', (e) => {
            if(!document.querySelector('nav').contains(e.target)){
                this.deactivate()
            }
        });
    },
    methods: {
        activate(){
            this.menu = true;
            return document.querySelector('nav').classList.add('active');
        },
        deactivate(){
            this.menu = false;
            return document.querySelector('nav').classList.remove('active');
        },
        toggle(){
            return this.menu ? this.deactivate() : this.activate();
        }
    }
}
</script>
<style scoped>
    .menu-toggle{
        width: 50px;
        aspect-ratio: 1;
        background-color: black;
        margin: 10px;
        position: absolute;
        z-index: 1000;
    }

    #container{
        position: fixed;
        top: 0;
    }

    nav{
        width: 100vw;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 70px 20vw 0 20vw;
        background-color: green;
        transform: translateY(-100%);
        transition: transform 0.1s ease-in;
    }

    nav.active{
        transform: translateY(0);
    }

    nav >>> .v-btn {
        width: 100% !important;
    }

    .theme-btn{
        margin: 10px 0 20px 0;
    }
</style>
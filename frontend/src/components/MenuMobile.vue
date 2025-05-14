<template>
    <div id="container">
        <div class="menu-toggle" @click.stop="toggle">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
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
        this.nav = document.querySelector('nav');
        this.bars = document.querySelectorAll('.bar');
    },
    methods: {
        activate(){
            this.menu = true;
            this.bars.forEach((bar) => {
                bar.classList.add('active')
            })
            return this.nav.classList.add('active');
        },
        deactivate(){
            this.menu = false;
            this.bars.forEach((bar) => {
                bar.classList.remove('active')
            })
            return this.nav.classList.remove('active');
        },
        toggle(){
            return this.menu ? this.deactivate() : this.activate();
        }
    }
}
</script>
<style scoped>
    .menu-toggle{
        width: 40px;
        aspect-ratio: 1.1;
        right: 0;
        margin: 20px;
        position: absolute;
        z-index: 1000;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }

    .bar{
        background-color: black;
        height: 7px;
        border-radius: 5px;
        width: 100%;
        transition: transform 0.2s ease-out, opacity 0.1s ease;
    }

    .bar:nth-child(1).active{
        transform: translateY(200%) rotate(45deg);
        
    }
    .bar:nth-child(2).active{
        opacity: 0;
        
    }
    .bar:nth-child(3).active{
        transform: translateY(-200%) rotate(-45deg);
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
        transform: translateY(-150%);
        transition: transform 0.2s ease-in-out;
        box-shadow: var(--shadow-menu);
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
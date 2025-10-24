<template>
    <div v-if="ui.isMobile" id="bar">
        <div id="menu-button" @click="ui.isMenuOpen = !ui.isMenuOpen">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <MobileMenu :class="ui.isMenuOpen ? 'active' : ''" />
    </div>
    <div v-else id="bar">
        <ThemeToggle />
        <div id="account"></div>
    </div>        
</template>

<script setup>
import { useUIStore } from '@/stores/ui';
import MobileMenu from './mobile/AdminMobileMenu.vue';
import ThemeToggle from '../shared/ThemeToggle.vue';

const ui = useUIStore();

</script>

<style scoped>
    :root {
        --secondary: #f0f0f0;
    }

    #bar {
        height: 50px;
        width: auto;
        padding: 10px;
        background-color: var(--secondary);
        display: flex;
        align-items: center;
    }

    #menu-button {
        height: 35px;
        width: 45px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }

    #menu-button .bar {
        height: 20%;
        width: 100%;
        background-color: black;
        border-radius: 100px;
    }

    #account{
        --height: 100%;

        height: var(--height);
        aspect-ratio: 1;

    }
</style>
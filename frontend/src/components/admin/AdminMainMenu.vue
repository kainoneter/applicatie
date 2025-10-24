<template>
    <div id="menu">
        <div class="logo"></div>
        <div v-for="route in routes" :key="route.name" class="menu-item">
            {{ $t(`${route.name}.title`) }}
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const routes = router.getRoutes().filter(route => route.path.startsWith('/admin') && route.name && !route.meta.hide);

</script>

<style scoped>
    #menu{
        --height: 100vh;
        --width: 300px;
        --padding: 10px;

        height: var(--height);
        width: var(--width);
        background-color: var(--secondary);
        padding: var(--padding);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .menu-item{
        --width: 100%;

        width: var(--width);
        text-align: left;
    }

    .logo{
        --width: 80%;

        width: var(--width);
        aspect-ratio: 1;
    }
</style>
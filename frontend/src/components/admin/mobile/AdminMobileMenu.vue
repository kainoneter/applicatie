<template>
    <div id="menu">
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
        --width: 100%;

        width: var(--width);
        transition: transform 0.2s ease-in-out;
        transform: scaleY(0);    
        transform-origin: top;
        overflow: hidden;
        background-color: var(--secondary);
        position: absolute;
        top: 50px;
        left: 0;
    }

    #menu.active{
        transform: scaleY(1);
    }

    .menu-item{
        --padding: 5vw;

        padding: var(--padding);
    }
</style>
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
const routes = router.getRoutes().filter(route => route.name && !route.meta.hide);

</script>

<style scoped>
    #menu{
        --height: 100vh;
        --width: 300px;

        height: var(--height);
        width: var(--width);
        background-color: var(--secondary);
    }

    
</style>
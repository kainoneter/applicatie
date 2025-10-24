<template>
    <div class="layout">
        <main>
            <TopBar />
            <div class="content">
                <router-view />
            </div>  
        </main>
    </div>
</template>

<script setup>
import TopBar from '@/components/frontend/TopBar.vue';
import { useUIStore } from '@/stores/ui';

const ui = useUIStore();

</script>


<style scoped>
    .layout{
        --height: 100vh;

        display: flex;
        height: var(--height);
    }

    main{
        flex: 1;
    }
</style>    
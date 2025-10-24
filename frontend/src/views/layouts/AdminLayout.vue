<template>
    <div class="layout">
        <MainMenu v-if="!ui.isMobile"/>
        <main>
            <TopBar />
            <div class="content">
                <router-view />
            </div>  
        </main>
    </div>
</template>

<script setup>
import MainMenu from '@/components/admin/AdminMainMenu.vue';
import TopBar from '@/components/admin/AdminTopBar.vue';

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
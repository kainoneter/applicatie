<template>
    <div class="background" @click="ui.toggleTheme">
        <div :class="{ selection: true, active: ui.dark }"></div>
    </div>
</template>

<script setup>
    import { useUIStore } from '@/stores/ui';
    import { onMounted } from 'vue';

    const ui = useUIStore();
</script>

<style scoped>
    .background{
        height: 20px;
        width: 50px;
        display: flex;
        align-items: center;
        border-radius: 20px;
        background-color: #cccc;
    }

    .selection{
        height: 25px;
        aspect-ratio: 1;
        background-color: yellow;
        box-shadow: 0 0 2px 4px rgba(229, 255, 0, 0.4);
        border-radius: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: margin 0.1s ease-in-out, background-color 0.2s ease;
    }

    .selection.active{
        margin: 0 0 0 25px;
        background-color: black;
        box-shadow: inset 12px 0 0 0 rgba(255, 255, 255, 1);
    }

    .selection:hover, .background:hover{
        cursor: pointer;
    }
</style>
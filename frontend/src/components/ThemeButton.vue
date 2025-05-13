<template>
    <div class="theme-btn">
        <div @click="toggleTheme()" class="background bg-switch">
            <div :class="{ selection: true, active: isDark }">
                <div class="sun"></div>
                <div class="moon"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
import { useTheme } from 'vuetify';
export default {
    setup(){
        const theme = useTheme();

        const toggleTheme = () => {
            theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
            localStorage.setItem('theme', theme.global.name.value);
        }

        const isDark = computed(() => theme.global.current.value.dark);

        return{
            toggleTheme,
            isDark,
        };
    },
}
</script>
<style scoped>
    .background{
        height: 20px;
        width: 50px;
        display: flex;
        align-items: center;
        border-radius: 20px;
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

    .background:hover,
    .selection:hover{
        cursor: pointer;
    }

    .selection.active{
        margin: 0 0 0 25px;
        background-color: black;
        box-shadow: inset 12px 0 0 0 rgba(255, 255, 255, 1);
    }
</style>
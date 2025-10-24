import { defineStore } from "pinia";
import { onMounted, onUnmounted, ref, shallowRef } from "vue";

export const useUIStore = defineStore('ui', () => {
    const isMobile = ref(window.innerWidth <= 768);
    const isMenuOpen = ref(false);
    const dark = ref(localStorage.getItem('theme') === 'true');

    function checkScreen() {
        isMobile.value = window.innerWidth <= 768;
    }

    
    function toggleTheme(){
        dark.value = !dark.value;
        localStorage.setItem('theme', dark.value);
        document.documentElement.setAttribute('data-theme', dark.value);
    }

    onMounted(() => {
        window.addEventListener('resize', checkScreen)

        document.documentElement.setAttribute('data-theme', dark.value);
    });

    onUnmounted(() => window.removeEventListener('resize', checkScreen));

    return { isMobile, isMenuOpen, dark, toggleTheme };
});
import { defineStore } from "pinia";
import { onMounted, onUnmounted, ref, shallowRef } from "vue";

export const useUIStore = defineStore('ui', () => {
    const isMobile = ref(window.innerWidth <= 768);
    const isMenuOpen = ref(false);

    function checkScreen() {
        isMobile.value = window.innerWidth <= 768;
    }

    onMounted(() => window.addEventListener('resize', checkScreen));
    onUnmounted(() => window.removeEventListener('resize', checkScreen));

    return { isMobile, isMenuOpen };
});
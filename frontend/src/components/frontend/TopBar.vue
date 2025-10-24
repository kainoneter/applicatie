<template>
    <div id="bar" :class="{ active: isTop}">
        
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const isTop = ref(true);

function handleScroll()
{
    isTop.value = window.scrollY === 0;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll();
});

</script>

<style scoped>
#bar{
    --height: 50px;
    
    width: 100%;
    height: var(--height);
    background-color: var(--secondary);
    transition: transform 0.2s ease;
    position: fixed;
}

#bar.active{
    transform: scaleY(2);
}
</style>
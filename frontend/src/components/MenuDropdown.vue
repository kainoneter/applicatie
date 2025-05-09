<template>
    <div>
        <v-menu offset="5">
            <template v-slot:activator="{ props }">
                <MenuButton :title="title" :icon="icon" v-bind="props"/>
            </template>
            <v-list>
                <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                    :value="index"
                    @click="$router.push({name: item.name})"
                    >
                    <v-list-item-title>{{ $t(item.meta.title) }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>
<script>
import MenuButton from './MenuButton.vue';
export default {
    components: {
        MenuButton,
    },
    props: {
        title: {
            type: String,
            required: true
        },
        icon: String,
        items: Array,
    }
}
</script>
<style>
    
</style>
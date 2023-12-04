<template>
    <div class="module" :class="{'navbar-wrap': navbar}">
        <router-view/>
    </div>
</template>
<script>
import { onBeforeRouteUpdate } from 'vue-router'
export default {
    name: "AppMain",
    setup(){
        onBeforeRouteUpdate(to => {
            
        });
        return {
            
        }
    },
    props: {
        navbar: Boolean
    },
}
</script>
<style scoped>
.navbar-wrap{
    padding-top: 50px;
    padding-bottom: 60px;
    box-sizing: border-box;
}
</style>
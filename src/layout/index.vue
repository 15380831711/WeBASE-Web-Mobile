<template>
    <div>
        <app-main />
        <!-- <tabbar /> -->
    </div>
</template>
<script>
import { AppMain, Tabbar } from './components'
export default {
    name: 'Layout',
    components: {
        AppMain,
        Tabbar,
    },
    setup() {

    },
}
</script>
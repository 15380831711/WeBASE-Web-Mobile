<template>
    <div>
        <navbar />
        <app-main navbar/>
    </div>
</template>
<script>
import { AppMain, Navbar } from './components'
export default {
    name: 'Layout',
    components: {
        AppMain,
        Navbar,
    },
    setup() {

    },
}
</script>
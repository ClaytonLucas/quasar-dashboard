<template>
    
        <q-page >
            <info-cards></info-cards>
            <dash-board-charts></dash-board-charts>
            <post-cards></post-cards>
        </q-page>
    
</template>
<script>
// import { onMounted } from 'vue';
// import ApexCharts from 'apexcharts'
import InfoCards from "../components/InfoCards.vue"
import DashBoardCharts from "../components/DashBoardCharts.vue"
import PostCards from "../components/PostCards.vue"
export default {
    name: "HomeView",
    components:{
        InfoCards,
        DashBoardCharts,
        PostCards
    },
    setup () {
        
    }
}
</script>

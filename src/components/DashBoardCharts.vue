<template>
    <div class=" row justify-center q-gutter-md">
        
        <apexchart type="pie"  :options="OptionsPie" :series="seriesPie"></apexchart>
    
        <apexchart type="bar"  :options="optionsBar" :series="seriesBar"></apexchart>
    </div>
    <div class="q-pa-md row justify-center q-gutter-md">
        <div class="col-12">
        <apexchart  type="bar" :options="options" :series="series"></apexchart>
        </div>
    </div>
</template>
<script>
import api from "@/Services/API";
import {onMounted, reactive} from "vue";
export default {
    name:"DashBoardCharts",
    setup() {
        let options= reactive ({
                chart: {
                id: 'vuechart-example'
                },
                
                xaxis: {
                    categories: []
                }
            })
        let series= reactive ([{
                name: 'series-1',
                data: []
            }]) 
        let optionsBar= reactive ({
                chart: {
                id: 'vuechart-example'
                },
                xaxis: {
                    categories: []
                },
                plotOptions: {
                bar: {
                    
                    horizontal: true,
                }
                }
            })
        let seriesBar = reactive ([{
                name: 'series-1',
                data: []
            }]) 
        let seriesPie = reactive([0,0])
        
        let OptionsPie = reactive({
            chart:{
                width: 380,
                type: 'pie'
            },
            labels: ['male', 'female'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
        })

        onMounted(()=> {
            api.get("/products/category/smartphones").then((response) => {
                getChartColunmData(response.data);
            })
            api.get("/users").then((response) =>{
                getPieData(response.data);
            })
        })
        let getChartColunmData = (data) =>{
            data.products.forEach((product) =>{
                options.xaxis.categories.push(product.title)
                series[0].data.push(product.stock)
                optionsBar.xaxis.categories.push(product.title)
                seriesBar[0].data.push(product.rating)
            })
         
        }
        let getPieData = (data) =>{
            let maleCount = 0;
            let femaleCount = 0;
            data.users.forEach((user) =>{
                if(user.gender === 'male'){
                    maleCount++
                    seriesPie[0] = maleCount
                }else{
                    femaleCount++
                    seriesPie[1] = femaleCount
                }
            })
        }
        
        return {
            options,
            series,
            optionsBar,
            seriesBar,
            OptionsPie,
            seriesPie,
        }
    },
}
</script>

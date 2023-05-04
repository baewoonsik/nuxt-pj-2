<script setup lang="ts">

import { useWeatherStore } from '@/store/weatherStore';
import { computed, onMounted } from 'vue';

const store = useWeatherStore();

const categories = computed(() => store.weatherData.map((item) => item.tm));

const rhmChartData = computed(() => [
    {
        name: "Min Rhm",
        data: store.weatherData.map((item) => item.minRhm),
    },
    {
        name: "Avg Rhm",
        data: store.weatherData.map((item) => item.avgRhm),
    },
]);

const temChartData = computed(() => [
    {
        name: "High Temp",
        data: store.weatherData.map((item) => item.maxTa),
    },
    {
        name: "Low Temp",
        data: store.weatherData.map((item) => item.minTa),
    },
]);

const windChartData = computed(() => [
    {
        name: "Max WS",
        data: store.weatherData.map((item) => item.maxWs),
    },
    {
        name: "Avg WS",
        data: store.weatherData.map((item) => item.avgWs),
    },
]);

const isLoaded = computed(() => store.weatherData.length > 0);

onMounted(() => {
    store.fetchWeatherData('20220801', '20220807', '143')
});

</script>

<template>
    <NuxtLayout name="inner-nav">
        <div class="chart-containing" v-if="isLoaded">
            <h1 class="chart-title">Weather Data Dash Board</h1>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4">
                        <RelativeHumidityChart :categories="categories" :data="rhmChartData" />
                    </div>
                    <div class="col-4">
                        <TemperatureChart :categories="categories" :data="temChartData" />
                    </div>
                    <div class="col-4">
                        <WindChart :categories="categories" :data="windChartData" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <RelativeHumidityChart :categories="categories" :data="rhmChartData" />
                    </div>
                    <div class="col-4">
                        <TemperatureChart :categories="categories" :data="temChartData" />
                    </div>
                    <div class="col-4">
                        <WindChart :categories="categories" :data="windChartData" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <RelativeHumidityChart :categories="categories" :data="rhmChartData" />
                    </div>
                    <div class="col-4">
                        <TemperatureChart :categories="categories" :data="temChartData" />
                    </div>
                    <div class="col-4">
                        <WindChart :categories="categories" :data="windChartData" />
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>
    </NuxtLayout>
</template>

<style scoped>
.chart-containing {
    position: relative;
    width: 100%;
    background-color: beige;
}

.chart-title {
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    padding: 1rem;
    margin-bottom: 2rem;
}
</style>
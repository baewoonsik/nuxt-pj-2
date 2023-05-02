<template>
    <ClientOnly>
        <apexchart width="560" type="bar" :options="chartOptions" :series="chartData"></apexchart>
    </ClientOnly>
</template>
  
<script setup lang="ts">

const props = defineProps<{
    categories: string[]
    data: { name: string, data: number[] }[]
}>()

const chartData = computed(() => {
    const { categories, data } = props;

    return data.map((item) => {
        return {
            name: item.name,
            data: item.data.map((value, index) => {
                return {
                    x: categories[index],
                    y: value,
                };
            }),
        };
    });
});

const chartOptions = {
    chart: {
        type: 'bar',
        height: 430,
    },
    title: {
        text: 'High & Low Temperature',
        align: 'center'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            dataLabels: {
                position: 'top',
            },
        }
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#000']
        }
    },
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    tooltip: {
        shared: true,
        intersect: false
    },
    xaxis: {
        categories: props.categories,
    },
    yaxis: {
        title: {
            text: 'Temperature (°C)'
        },
        min: 0,
        max: 40,
    },
};
</script>
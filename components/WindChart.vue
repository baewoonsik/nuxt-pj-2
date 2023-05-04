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
        width: '100%',
        height: 350,
        type: 'line',
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#77B6EA', '#545454'],
    dataLabels: {
        enabled: true,
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'High & Avarage Wind Speeds',
        align: 'center'
    },
    grid: {
        borderColor: '#e7e7e7',
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    markers: {
        size: 1
    },
    xaxis: {
        title: {
            text: 'Daily Wind Speed'
        }
    },
    yaxis: {
        title: {
            text: 'Wind Speed(m/s)'
        },
        min: 0,
        max: 10
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        // floating: true,
        offsetY: 8,
        offsetX: -5
    }
};
</script>

<template>
    <ClientOnly>
        <apexchart height="350" type="line" :options="chartOptions" :series="chartData"></apexchart>
    </ClientOnly>
</template>
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
        height: 350,
        type: 'area'
    },
    title: {
        text: 'Min & Avarage Relative Humidity',
        align: 'center'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        // title: {
        //     text: 'Min & Avarage Relative Humidity',
        //     align: 'center'
        // },
        categories: props.categories,
    },
}
</script>

<template>
    <ClientOnly>
        <apexchart height="350" type="area" :options="chartOptions" :series="chartData"></apexchart>
    </ClientOnly>
</template>
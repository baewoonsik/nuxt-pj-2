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
        text: '지역별 kmaTci 수치',
        align: 'center'
    },
    plotOptions: {
        bar: {
            horizontal: false,
            dataLabels: {
                position: 'top',
            },
            columnWidth: '15%',
        }
    },
    dataLabels: {
        enabled: false,
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
            text: 'kmaTci'
        },
        min: -0.3,
        max: 0.4,
    },
};
</script>

<template>
    <div style="display: flex; justify-content: center;">
        <ClientOnly>
            <apexchart width="800" type="bar" :options="chartOptions" :series="chartData">
            </apexchart>
        </ClientOnly>
    </div>
</template>
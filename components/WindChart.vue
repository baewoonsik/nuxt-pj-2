<!-- |이 코드는 Vue.js와 ApexCharts를 사용하여 라인 차트를 그리는 컴포넌트입니다.
|
|좋은 점:
|- Vue.js의 컴포넌트 기능을 활용하여 코드의 가독성과 유지보수성이 높아졌습니다.
|- ApexCharts를 사용하여 간편하게 차트를 그릴 수 있습니다.
|- 컴포넌트 내에서 ClientOnly 태그를 사용하여 클라이언트 측에서만 렌더링되도록 설정하여 서버 측에서는 불필요한 작업을 줄일 수 있습니다.
|
|나쁜 점:
|- 코드의 가독성을 높이기 위해 들여쓰기와 공백을 일관성 있게 사용하지 않았습니다.
|- 타입스크립트를 사용하고 있지만, 변수와 함수의 타입을 명시하지 않아 가독성이 떨어집니다.
|- 컴포넌트의 props를 명확하게 정의하지 않았습니다. -->
<template>
    <ClientOnly>
        <apexchart height="350" type="line" :options="chartOptions" :series="chartData"></apexchart>
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
<script setup lang="ts">
import { useCityTourStore } from '@/store/regionWeatherStore';
import { onMounted, computed, ref } from 'vue';
const store = useCityTourStore();

// store에서 가져온 도시 정보 데이터
const regionWeatherData = computed(() => store.cityTourData);

// 도 이름 목록
const doName = computed(() => {
    return Array.from(new Set(regionWeatherData.value.map((item) => item.doName)));
});
// 선택된 도 이름
const doNameRef = ref('');

// 선택된 시 이름
const cityNameRef = ref('');

// 필터링된 데이터
const filteredData = ref([] as Array<any>);

// 선택된 도에 해당하는 시 이름 목록
const cityNameOptions = computed(() => {
    return regionWeatherData.value
        .filter((item) => item.doName === doNameRef.value)
        .map((item) => item.cityName);
});

onMounted(async () => {
    await store.fetchCityTourData();
});

// 도 이름이 변경될 때 실행되는 함수
function updateCityNameOptions() {
    cityNameRef.value = '';
    filteredData.value = [];
}

// 조회 버튼을 클릭할 때 실행되는 함수
function fetchData() {
    filteredData.value = regionWeatherData.value
        .filter((item) => item.doName === doNameRef.value && item.cityName === cityNameRef.value);
}

const categories = computed(() => filteredData.value.map((item) => item.totalCityName));

const regionChartData = computed(() => [
    {
        name: "DATA",
        data: filteredData.value.map((item) => item.kmaTci),
    },
]);

</script>

<template>
    <div>
        <NuxtLayout name="inner-nav">
            <h1>region chart page</h1>
            <div class="d-flex align-items-center justify-content-center">
                <div class="me-4">
                    <label class="el-margin" for="rgwd">doName : </label>
                    <select class="el-margin form-select" v-model="doNameRef" id="rgwd" @change="updateCityNameOptions">
                        <option v-for="(item, index) in doName" :key="index">{{ item }}</option>
                    </select>
                    <p class="el-margin">select doName : {{ doNameRef }}</p>
                </div>
                <div class="me-4">
                    <label class="el-margin" for="rgwd">cityName : </label>
                    <select class="el-margin form-select" v-model="cityNameRef" id="rgwd">
                        <option v-for="(item, index) in Array.from(new Set(cityNameOptions))" :key="index">{{ item }}
                        </option>
                    </select>
                    <p class="el-margin">select cityName : {{ cityNameRef }}</p>
                </div>
                <div class="btn-margin">
                    <button @click="fetchData" class="btn btn-primary">조회</button>
                </div>
            </div>
            <div v-if="filteredData.length > 0">
                <div>
                    <RegionChart :categories="categories" :data="regionChartData" />
                </div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>doName</th>
                            <th>cityName</th>
                            <th>kmaTci</th>
                            <th>TCI_GRADE</th>
                            <th>cityAreaId</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in filteredData" :key="index">
                            <td>{{ item.tm }}</td>
                            <td>{{ item.doName }}</td>
                            <td>{{ item.cityName }}</td>
                            <td>{{ item.kmaTci }}</td>
                            <td>{{ item.TCI_GRADE }}</td>
                            <td>{{ item.cityAreaId }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped>
.el-margin {
    margin-bottom: 0.8rem;
}

.btn-margin {
    margin-bottom: 0.8rem;
}
</style>
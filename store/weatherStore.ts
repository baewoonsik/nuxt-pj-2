import { defineStore } from "pinia";
import axios from "axios";

interface WeatherData {
  stnNm: string; // 지점명
  tm: string; // 일시
  maxTa: number; // 최고기온
  minTa: number; // 최저기온
  avgTa: number; // 평균기온
  maxWs: number; // 최대 풍속
  avgWs: number; // 평균 풍속
  minRhm: number; // 최소 상대습도
  avgRhm: number; // 평균 상대습도
  sumRn: number; // 일강수량
}

// 향후 .env 파일로 빼기
const baseURL = "https://apis.data.go.kr/1360000/AsosDalyInfoService";
const privateKey =
  "JB08o2MkBwznc9Zxs1HmJjv1VFxdsesKrng4Ty9li2FWreVQhY7qQ88C2K7ul6%2FyC1bBGkad%2BLof7P6VM9raZg%3D%3D";

// const config = useRuntimeConfig();

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    weatherData: [] as WeatherData[],
  }),
  actions: {
    async fetchWeatherData(startDt: string, endDt: string, stnIds: string) {
      const { data } = await axios.get<{
        response: { body: { items: { item: WeatherData[] } } };
      }>(
        `${baseURL}/getWthrDataList?serviceKey=${privateKey}&pageNo=1&numOfRows=10&dataType=JSON&dataCd=ASOS&dateCd=DAY&startDt=${startDt}&endDt=${endDt}&stnIds=${stnIds}`
      );

      const weatherData = data.response.body.items.item;

      this.weatherData = weatherData;
      console.log(this.weatherData);
    },
  },
});

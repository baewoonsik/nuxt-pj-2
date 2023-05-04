import { defineStore } from "pinia";
import axios from "axios";

interface CityTour {
  tm: string;
  totalCityName: string;
  doName: string;
  cityName: string;
  cityAreaId: string;
  kmaTci: number;
  TCI_GRADE: number;
}

const BASE_URL = "https://apis.data.go.kr/1360000/TourStnInfoService1";

export const useCityTourStore = defineStore({
  id: "cityTour",
  state: () => ({
    cityTourData: [] as CityTour[],
    error: null as Error | null,
  }),
  actions: {
    async fetchCityTourData(
      pageNo = 1,
      numOfRows = 30,
      currentDate = "2022080100",
      day = "24"
    ) {
      try {
        const response = await axios.get<{
          response: {
            body: {
              items: { item: CityTour[] };
            };
          };
        }>(`${BASE_URL}/getCityTourClmIdx1`, {
          params: {
            ServiceKey:
              "JB08o2MkBwznc9Zxs1HmJjv1VFxdsesKrng4Ty9li2FWreVQhY7qQ88C2K7ul6/yC1bBGkad+Lof7P6VM9raZg==",
            pageNo,
            numOfRows,
            dataType: "JSON",
            CURRENT_DATE: currentDate,
            DAY: day,
          },
        });
        this.cityTourData = response.data.response.body.items.item;
        console.log(this.cityTourData);
      } catch (error: any) {
        this.error = error;
      }
    },
  },
});

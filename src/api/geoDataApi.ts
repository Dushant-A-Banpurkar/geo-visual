import data from "../mock/geoData.json";
import type { GeoRecord } from "../types/geo";

export type GeoApiResponse = {
  total: number;
  records: GeoRecord[];
};

export const fetchGeoData = async (
  page: number,
  pageSize: number
): Promise<GeoApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = page * pageSize;
      const end = start + pageSize;

      resolve({
        total: data.length,
        records: data.slice(start, end) as GeoRecord[],
      });
    }, 300);
  });
};

import type { GeoRecord } from "../types/geo.ts";

export const sortAndFilter = (
  data: GeoRecord[],
  status: string
) => {
  if (!status) return data;
  return data.filter((row) => row.status === status);
};

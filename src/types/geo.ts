export type GeoRecord = {
  id: string;
  projectName: string;
  latitude: number;
  longitude: number;
  status: "Active" | "Inactive" | "Maintenance";
  lastUpdated: string;
};

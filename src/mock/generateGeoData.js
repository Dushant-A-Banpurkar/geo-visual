import { writeFileSync } from "fs";

const STATUSES = ["Active", "Inactive", "Maintenance"];

function randomBetween(min, max) {
  return +(Math.random() * (max - min) + min).toFixed(6);
}

function randomDate() {
  const start = new Date(2024, 0, 1);
  const end = new Date(2026, 1, 1);
  return new Date(start.getTime() + Math.random() * (end - start)).toISOString().split("T")[0];
}

const data = Array.from({ length: 5000 }, (_, i) => ({
  id: String(i + 1),
  projectName: `Geo Project ${i + 1}`,
  latitude: randomBetween(8.0, 37.0),     // India latitude range
  longitude: randomBetween(68.0, 97.0),   // India longitude range
  status: STATUSES[i % STATUSES.length],
  lastUpdated: randomDate(),
}));

writeFileSync(
  "./geoData.json",
  JSON.stringify(data, null, 2)
);

console.log("✅ 5000 geo records generated successfully");

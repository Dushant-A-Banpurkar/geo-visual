import { useEffect, useState } from "react";
import { fetchGeoData } from "../api/geoDataApi";
import type { GeoRecord } from "../types/geo.ts";

export const useGeoData = () => {
  const [rows, setRows] = useState<GeoRecord[]>([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [total, setTotal] = useState(0);
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    fetchGeoData(page, pageSize).then((res) => {
      setRows(res.records);
      setTotal(res.total);
    });
  }, [page, pageSize]);

  return {
    rows,
    page,
    pageSize,
    total,
    statusFilter,
    setStatusFilter,
    setPage,
    setPageSize,
  };
};

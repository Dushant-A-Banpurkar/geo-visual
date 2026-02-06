import { useState } from "react";
import { useGeoData } from "../hooks/useGeoData";
import { DataTable } from "../components/DataTable/DataTable";
import { MapView } from "../components/MapView/MapView";
import { StatusFilter } from "../components/Filters/StatusFilter";

export const Dashboard = () => {
  const {
    rows,
    page,
    pageSize,
    total,
    statusFilter,
    setStatusFilter,
    setPage,
  } = useGeoData();

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredRows = statusFilter
    ? rows.filter((r) => r.status === statusFilter)
    : rows;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <div>
        <StatusFilter value={statusFilter} onChange={setStatusFilter} />
        <DataTable
          rows={filteredRows}
          page={page}
          pageSize={pageSize}
          total={total}
          onPageChange={setPage}
          selectedId={selectedId}
          onRowSelect={setSelectedId}
        />
      </div>

      <MapView
        data={filteredRows}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
    </div>
  );
};

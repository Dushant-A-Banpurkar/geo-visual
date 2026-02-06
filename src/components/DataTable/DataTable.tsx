import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./columns";
import type { GeoRecord } from "../../types/geo";

type Props = {
  rows: GeoRecord[];
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (p: number) => void;
  onRowSelect: (id: string) => void;
  selectedId: string | null;
};

export const DataTable = ({
  rows,
  page,
  pageSize,
  total,
  onPageChange,
  onRowSelect,
  selectedId,
}: Props) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      rowCount={total}
      paginationMode="server"
      paginationModel={{ page, pageSize }}
      onPaginationModelChange={(model) =>
        onPageChange(model.page)
      }
      getRowClassName={(params) =>
        params.id === selectedId ? "selected-row" : ""
      }
      onRowClick={(params) => onRowSelect(String(params.id))}
      pageSizeOptions={[pageSize]}
      disableRowSelectionOnClick
      autoHeight
    />
  );
};

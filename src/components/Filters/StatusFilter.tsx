import { MenuItem, Select } from "@mui/material";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export const StatusFilter = ({ value, onChange }: Props) => {
  return (
    <Select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      size="small"
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="Active">Active</MenuItem>
      <MenuItem value="Inactive">Inactive</MenuItem>
      <MenuItem value="Maintenance">Maintenance</MenuItem>
    </Select>
  );
};

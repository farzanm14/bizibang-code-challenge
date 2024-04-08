import { Column } from "../../models/table";

export const columns: readonly Column[] = [
  { id: "name", label: "Column1", minWidth: 170 },
  { id: "code", label: "Column2", minWidth: 100 },
  {
    id: "population",
    label: "Column3",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Column4",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Column5",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

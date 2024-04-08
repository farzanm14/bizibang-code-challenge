import ListIcon from "@mui/icons-material/List";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
interface MenuItemProps {
  label: string;
}
export default function MyMenuItem({ label }: MenuItemProps) {
  return (
    <MenuItem>
      <ListItemText>{label}</ListItemText>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
    </MenuItem>
  );
}

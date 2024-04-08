import { MenuList } from "@mui/material";
import MyMenuItem from "./MenuItem";
import { MenuItem } from "../../models/menu";
import "./index.css";

export default function MyMenu() {
  const menuItems: MenuItem[] = [
    {
      label: "بانک ها",
    },
    {
      label: "عکس ها",
    },
    {
      label: "ثابت ها",
    },
    {
      label: "لیست ها",
    },
  ];

  return (
    <MenuList className="menu-list">
      {menuItems.map((item) => (
        <MyMenuItem key={item.label} label={item.label} />
      ))}
    </MenuList>
  );
}

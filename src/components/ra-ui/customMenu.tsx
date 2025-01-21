import * as React from "react";
import { Menu } from "react-admin";
import { MenuItemLink } from "react-admin";
import UserIcon from "../ui/users";
import MissionIcon from "../ui/missions";
import LeadsIcon from "../ui/leads";
import StudentIcon from "../ui/student";
import "./layout/table.css";
// import SettingsIcon from "@mui/icons-material/Settings";

const CustomMenu = (props: any) => {
  const [permissions, setPermissions] = React.useState({
    authlevel: "slave",
  });
  const getPermissions = async () => {
    // burada permission ekliyecez ve ona göre menü oluşturacağız
    const data = {
      authlevel: "admin",
    };
    setPermissions(data);
    console.log(permissions);
  };
  React.useEffect(() => {
    getPermissions();
  }, []);

  return (
    <Menu {...props}>
      <MenuItemLink
        to="/users"
        primaryText="Kullanıcılar"
        leftIcon={<UserIcon />}
      />
      <MenuItemLink
        to="/leads"
        primaryText="Potansiyel Müşteriler"
        leftIcon={<LeadsIcon />}
      />
      <MenuItemLink
        to="/students"
        primaryText="Öğrenciler"
        leftIcon={<StudentIcon />}
      />
      <MenuItemLink
        to="/missions"
        primaryText="Görevler"
        leftIcon={<MissionIcon />}
      />
      <MenuItemLink to="/sale" primaryText="Ciro" leftIcon={<MissionIcon />} />
      {/* <MenuItemLink to="/mesai" primaryText="Mesai" leftIcon={<MissionIcon />} /> */}
      <MenuItemLink
        to="/add-working-hours"
        primaryText="Mesai Ekle"
        leftIcon={<MissionIcon />}
      />
      <MenuItemLink
        to="/feedback"
        primaryText="Geri Bildirim"
        leftIcon={<MissionIcon />}
      />
      <MenuItemLink to="/sell" primaryText="Satış" leftIcon={<MissionIcon />} />

      {/* {permissions?.authlevel === "admin" && (
                <MenuItemLink to="/settings" primaryText="Settings" leftIcon={<SettingsIcon />} />
            )} */}
    </Menu>
  );
};

export default CustomMenu;

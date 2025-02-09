import * as React from "react";
import { Menu } from "react-admin";
import { MenuItemLink } from "react-admin";
import UserIcon from "../ui/users";
import MissionIcon from "../ui/missions";
import LeadsIcon from "../ui/leads";
import StudentIcon from "../ui/student";
import Bildirim from "../ui/bildirim";
import Ciro from "../ui/ciro";
import Clock from "../ui/clock";
import Access from "../ui/access";
import Heart from "../ui/heart";
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
  };
  const role = localStorage.getItem("role");
  React.useEffect(() => {
    getPermissions();
  }, []);

  return (
    <Menu {...props}>
      {role === "2" ? (
        <>
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
            leftIcon={<Access />}
          />
          <MenuItemLink to="/sale" primaryText="Ciro" leftIcon={<Bildirim />} />
          <MenuItemLink
            to="/add-working-hours"
            primaryText="Mesai Ekle"
            leftIcon={<Ciro />}
          />
          <MenuItemLink
            to="/feedback"
            primaryText="Geri Bildirim"
            leftIcon={<Clock />}
          />
          <MenuItemLink to="/sell" primaryText="Satış" leftIcon={<Heart />} />
        </>
      ) : (
        <>
          {/* <MenuItemLink
            to="/users"
            primaryText="Kullanıcılar"
            leftIcon={<UserIcon />}
          /> */}
          {/* <MenuItemLink
            to="/leads"
            primaryText="Potansiyel Müşteriler"
            leftIcon={<LeadsIcon />}
          /> */}
          <MenuItemLink
            to="/students"
            primaryText="Öğrenciler"
            leftIcon={<StudentIcon />}
          />
          <MenuItemLink
            to="/missions"
            primaryText="Görevler"
            leftIcon={<Access />}
          />
          {/* <MenuItemLink
            to="/sale"
            primaryText="Ciro"
            leftIcon={<MissionIcon />}
          /> */}
          <MenuItemLink
            to="/add-working-hours"
            primaryText="Mesai Ekle"
            leftIcon={<Bildirim />}
          />
          <MenuItemLink
            to="/feedback"
            primaryText="Geri Bildirim"
            leftIcon={<Ciro />}
          />
          <MenuItemLink to="/sell" primaryText="Satış" leftIcon={<Clock />} />
        </>
      )}
    </Menu>
  );
};

export default CustomMenu;

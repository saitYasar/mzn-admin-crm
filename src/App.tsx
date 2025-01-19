import { Admin, CustomRoutes, defaultTheme, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import { Route } from "react-router-dom";
import authProvider from "./authProvider";
import { UserList } from "./pages/users/list";
import { UserShow } from "./pages/users/show";
import { UserEdit } from "./pages/users/edit";
import { UserCreate } from "./pages/users/create";
import CustomMenu from "./components/ra-ui/customMenu";
import { LeadsList } from "./pages/leads/list";
import { LeadsCreate } from "./pages/leads/create";
import { LeadsEdit } from "./pages/leads/edit";
import { LeadsShow } from "./pages/leads/show";
import { StudentList } from "./pages/students/list";
import { StudentsEdit } from "./pages/students/edit";
// import { StudentCreate } from "./pages/students/create";
import { StudentShow } from "./pages/students/show";
import { deepmerge } from "@mui/utils";
import { CustomLayout } from "./components/ra-ui/layout";
import { MissionList } from "./pages/missions/list";
import { MissionsShow } from "./pages/missions/show";
import { MissionEdit } from "./pages/missions/edit";
import EmployeeTable from "./components/ui/employeTable";
import AddLoginDate from "./components/ui/addDateLogin";
import { FeedbackList } from "./pages/feedback/list";
import { FeedBackShow } from "./pages/feedback/show";
import { FeedBackCreate } from "./pages/feedback/create";
import { FeedBackEdit } from "./pages/feedback/edit";
import { SaleShow } from "./pages/sales/show";
import { SaleList } from "./pages/sales/list";
import { SalesCreate } from "./pages/sales/create";
import { SalesEdit } from "./pages/sales/edit";

const myTheme = deepmerge(defaultTheme, {
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#f5ee31",
    },
    background: {
      default: "#f4f6f8", // Arka plan rengi
      paper: "#ffffff", // Kart ve menü gibi elemanların rengi
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5ee31", // Navigasyon menüsü rengi
          color: "#ffffff", // Menü yazı rengi
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export const App = () => (
  <Admin
    layout={CustomLayout}
    theme={myTheme}
    dataProvider={dataProvider}
    authProvider={authProvider}
    menu={CustomMenu}
  >
    <Resource
      name="users"
      list={UserList}
      show={UserShow}
      edit={UserEdit}
      create={UserCreate}
    />
    <Resource
      name="leads"
      list={LeadsList}
      show={LeadsShow}
      edit={LeadsEdit}
      create={LeadsCreate}
    />
    <Resource
      name="students"
      list={StudentList}
      show={StudentShow}
      edit={StudentsEdit}
    />
    <Resource
      name="missions"
      list={MissionList}
      show={MissionsShow}
      edit={MissionEdit}
      create={UserCreate}
    />
    <Resource
      name="feedback"
      list={FeedbackList}
      show={FeedBackShow}
      create={FeedBackCreate}
      edit={FeedBackEdit}
    />
    <Resource
      name="sale"
      list={SaleList}
      show={SaleShow}
      create={SalesCreate}
      edit={SalesEdit}
    />
    <CustomRoutes>
      <Route path="/mesai" element={<EmployeeTable />} />
      <Route path="/add-working-hours" element={<AddLoginDate />} />
    </CustomRoutes>
  </Admin>
);

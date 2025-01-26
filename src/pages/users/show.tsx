import {
  ImageField,
  Show,
  SimpleShowLayout,
  TabbedShowLayout,
  TabbedShowLayoutTabs,
  TextField,
  useShowController,
} from "react-admin";
import EmployeeTable from "../../components/ui/employeTable";
import AddPhoto from "../../components/ui/addPhoto";

export const UserShow = (props: any) => {
  const { record } = useShowController(props);

  return (
    <Show {...props}>
      <TabbedShowLayout
        tabs={
          <TabbedShowLayoutTabs variant="scrollable" scrollButtons="auto" />
        }
      >
        <TabbedShowLayout.Tab label="Genel">
          <TextField source="id" label={"id"} />
          <TextField source="name" label={"İsim"} />
          <TextField source="username" label={"Soy isim"} />
          <TextField source="email" label={"Mail"} />
          <TextField source="phone" label={"Telefon"} />
          <ImageField source="image" label={"Resim"} />
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="Çalışan Hareketleri" path="photo">
          <EmployeeTable record={record} />
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="Çalışan Fotoğrafı" path="photos">
          <AddPhoto reseaurch="users" record={record} />
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};

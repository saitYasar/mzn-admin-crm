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
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <TextField source="email" />
          <TextField source="phone" />
          <ImageField source="image" />
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

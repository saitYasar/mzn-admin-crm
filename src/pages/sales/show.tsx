import {
  DateField,
  ImageField,
  NumberField,
  ReferenceField,
  SelectField,
  Show,
  SimpleShowLayout,
  TabbedShowLayout,
  TabbedShowLayoutTabs,
  TextField,
  useShowController,
} from "react-admin";
import AddPhoto from "../../components/ui/addPhoto";

export const SaleShow = (props: any) => {
  const { record } = useShowController(props);
  return (
    <Show {...props}>
      <TabbedShowLayout
        tabs={
          <TabbedShowLayoutTabs variant="scrollable" scrollButtons="auto" />
        }
      >
        <TabbedShowLayout.Tab label="Genel">
          <TextField source="id" label="İd" />
          <ImageField src="image" />
          <SelectField
            source="type"
            label="Satış ve Alış"
            choices={[
              { id: 0, name: "Tanımlanmadı" },
              { id: 1, name: "Satış" },
              { id: 2, name: "Alış" },
            ]}
          />
          <ReferenceField
            label="Oluşturan Kişi"
            source="createBy"
            reference="users"
          >
            <TextField
              style={{ textDecoration: "none", color: "inherit" }}
              source="firstName"
            />{" "}
            <span> </span>
            <TextField
              style={{ textDecoration: "none", color: "inherit" }}
              source="lastName"
            />
          </ReferenceField>
          <DateField source="createDate" />
          <TextField source="note" label="Not" />
          <NumberField source="price" />
          <ReferenceField
            label="Referans Leads"
            source="reference"
            reference="leads"
          >
            <TextField
              style={{ textDecoration: "none", color: "inherit" }}
              source="firstName"
            />{" "}
            <span> </span>
            <TextField
              style={{ textDecoration: "none", color: "inherit" }}
              source="lastName"
            />
          </ReferenceField>
          <ImageField source="image" />
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="Çalışan Hareketleri" path="photos">
          <AddPhoto reseaurch="sale" record={record} />
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="Çalışan Hareketleri" path="photoss">
          <ImageField
            className="bigger"
            source="image"
            sx={{
              "& img": { maxWidth: 500, maxHeight: 500, objectFit: "contain" },
            }}
          />
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};

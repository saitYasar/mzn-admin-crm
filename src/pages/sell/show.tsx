import {
  BooleanField,
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

export const SellShow = (props: any) => {
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
          <TextField source="firstName" label="İsim" />
          <TextField source="lastName" label="Soy isim" />
          <TextField source="phone" label="phone" />
          <DateField source="date" label="Oluşturma Tarihi" />
          <SelectField
            source="serviceType"
            label="Hizmet Tipi"
            choices={[
              { id: 0, name: "Tanımlanmadı" },
              { id: 1, name: "Satış" },
              { id: 2, name: "Alış" },
            ]}
          />
          <ReferenceField
            label="Satan Kişi"
            source="sellerId"
            reference="users"
          >
            <TextField source="firstName" /> <span> </span>
            <TextField source="lastName" />
          </ReferenceField>
          <BooleanField source="isContainGuarantee" label="Garantili mi" />
          <TextField source="buyLocation" label="Satıldığı Lokasyon" />
          <NumberField source="bonusAmount" label="Alınan Prim" />
          <NumberField source="remainigAmount" label="Kalan Prim" />
        </TabbedShowLayout.Tab>
        {/* <TabbedShowLayout.Tab label="Çalışan Hareketleri" path="photos">
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
        </TabbedShowLayout.Tab> */}
      </TabbedShowLayout>
    </Show>
  );
};

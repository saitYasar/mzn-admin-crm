import {
  DateField,
  FunctionField,
  ImageField,
  ReferenceField,
  SelectField,
  Show,
  SimpleShowLayout,
  TabbedShowLayout,
  TabbedShowLayoutTabs,
  TextField,
  useRecordContext,
  useShowController,
} from "react-admin";
import {
  ArbitrajStages,
  DropshippingStages,
  PrivateLabelStages,
  SuspendStages,
  Type,
} from "../../lib/enum/enums";
import AddPhoto from "../../components/ui/addPhoto";

export const StudentShow = (props: any) => {
  const { record } = useShowController(props);
  console.log(record);

  const getStages = (condition: string) => {
    switch (condition) {
      case "dropshipping":
        return DropshippingStages;
      case "privateLabel":
        return PrivateLabelStages;
      case "arbitraj":
        return ArbitrajStages;
      case "suspend":
        return SuspendStages;
      default:
        return DropshippingStages;
    }
  };

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
          <TextField source="lastName" label="Soyisim" />
          <TextField source="email" label="email" />
          <TextField source="phone" label="Telefon" />
          <TextField source="image" label="Eğitim Bitim Resim" />
          <SelectField
            source="stage"
            label="Öğrenci Durumu"
            choices={getStages(Type[record?.type])}
          />
          <SelectField
            source="type"
            label="Müşteri Tipi"
            choices={[
              { id: 0, name: "Tanımlanmadı" },
              { id: 1, name: "Dropshipping" },
              { id: 2, name: "Arbitraj" },
              { id: 3, name: "PrivateLabel" },
              { id: 4, name: "Suspend" },
            ]}
          />
          <DateField source="createDate" label="Oluşturulma Tarihi" />
          <DateField source="serviceEndDate" label="Bitiş Tarihi" />
          <ReferenceField
            label="Atanan Danışman"
            source="leadUser"
            reference="users"
          >
            <TextField source="firstName" /> <span> </span>
            <TextField source="lastName" />
          </ReferenceField>
          <ReferenceField
            label="Onaylayan Danışman"
            source="confirmUser"
            reference="users"
          >
            <TextField source="firstName" /> <span> </span>
            <TextField source="lastName" />
          </ReferenceField>
          <FunctionField
            label="Yüzde Tamamlanma"
            render={(record: any) => {
              if (record?.stage == "99") {
                return <span>Beklemede %0</span>;
              }
              if (record?.stage == "0") {
                return <span>Başlamadı</span>;
              }
              const type = Type[record?.type];
              const stages = getStages(type);
              console.log(stages.length);
              const yuzde = (record.stage / stages.length) * 100;
              return <span>{yuzde.toFixed()}%</span>;
            }}
          />
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab
          label="Hizmet Bitiş Fotoğrafı Göster"
          path="photoss"
        >
          <ImageField
            className="bigger"
            source="image"
            sx={{
              "& img": { maxWidth: 500, maxHeight: 500, objectFit: "contain" },
            }}
          />
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="Hizmet Bitiş Fotoğrafı Ekle" path="photos">
          <AddPhoto reseaurch="students" record={record} />
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};

import {
  DateField,
  ReferenceField,
  SelectField,
  Show,
  SimpleShowLayout,
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
      <SimpleShowLayout>
        <TextField source="id" label="İd" />
        <TextField source="firstName" label="İsim" />
        <TextField source="lastName" label="Soyisim" />
        <TextField source="email" label="email" />
        <TextField source="phone" label="Telefon" />
        <TextField source="image" label="Resim" />
        <SelectField
          source="stage"
          label="Öğrenci Durumu"
          choices={getStages(Type[record.type])}
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
      </SimpleShowLayout>
    </Show>
  );
};

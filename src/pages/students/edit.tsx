import {
  DateInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import {
  ArbitrajStages,
  DropshippingStages,
  PrivateLabelStages,
  SuspendStages,
} from "../../lib/enum/enums";

export const StudentsEdit = (props: any) => {
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
        return [];
    }
  };

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="firstName" placeholder="İsim" />
        <TextInput source="lastName" placeholder="Soyisim" />
        <TextInput source="email" placeholder="Email" />
        <TextInput source="phone" placeholder="Telefon" />
        <DateInput source="serviceEndDate" label="Hizmet Bitiş Tarihi" />
        <SelectInput
          source="stage"
          label="Müşteri Durumu"
          choices={getStages("dropshipping")}
        />
        <SelectInput
          source="type"
          label="Müşteri Tipi"
          disabled
          choices={[
            { id: 0, name: "Tanımlanmadı" },
            { id: 1, name: "Dropshipping" },
            { id: 2, name: "Arbitraj" },
            { id: 3, name: "PrivateLabel" },
            { id: 4, name: "Suspend" },
          ]}
        />
        <TextInput source="image" placeholder="Resimler" />
        <ReferenceInput
          source="leadUser"
          reference="users"
          label="Atanan Danışman"
        >
          <SelectInput optionText="firstName" label={"Atanan Danışman"} />
        </ReferenceInput>
        <ReferenceInput
          source="confirmUser"
          reference="users"
          label="Onaylayan Danışman"
        >
          <SelectInput optionText="firstName" label="Onaylayan Danışman" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

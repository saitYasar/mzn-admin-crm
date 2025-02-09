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
        <TextInput fullWidth source="firstName" label="İsim" />
        <TextInput fullWidth source="lastName" label="Soyisim" />
        <TextInput fullWidth source="email" label="Email" />
        <TextInput fullWidth source="phone" label="Telefon" />
        <DateInput
          fullWidth
          source="serviceEndDate"
          label="Hizmet Bitiş Tarihi"
        />
        <SelectInput
          fullWidth
          source="stage"
          label="Müşteri Durumu"
          choices={getStages("dropshipping")}
        />
        <SelectInput
          source="type"
          fullWidth
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
        {/* <TextInput source="image" label="Resimler" /> */}
        <ReferenceInput
          fullWidth
          source="leadUser"
          reference="users"
          label="Atanan Danışman"
        >
          <SelectInput
            fullWidth
            optionText="firstName"
            label={"Atanan Danışman"}
          />
        </ReferenceInput>
        <ReferenceInput
          fullWidth
          source="confirmUser"
          reference="users"
          label="Onaylayan Danışman"
        >
          <SelectInput
            fullWidth
            optionText="firstName"
            label="Onaylayan Danışman"
          />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

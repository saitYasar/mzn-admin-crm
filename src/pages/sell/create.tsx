import {
  BooleanInput,
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const SellCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="firstName" label="İsim" />
        <TextInput source="lastName" label="Soy isim" />
        <TextInput source="phone" label="phone" />
        <SelectInput
          source="serviceType"
          label="Hizmet Tipi"
          choices={[
            { id: "0", name: "Tanımlanmadı" },
            { id: "1", name: "Satış" },
            { id: "2", name: "Alış" },
          ]}
        />
        <ReferenceInput label="Satan Kişi" source="sellerId" reference="users">
          <SelectInput optionText="firstName" label="Satan Kişi" />
        </ReferenceInput>
        <BooleanInput source="isContainGuarantee" label="Garantili mi" />
        <TextInput source="BuyLocation" label="Satıldığı Lokasyon" />
        <NumberInput source="bonusAmount" label="Alınan Prim" />
        <NumberInput source="remainigAmount" label="Kalan Prim" />
      </SimpleForm>
    </Create>
  );
};

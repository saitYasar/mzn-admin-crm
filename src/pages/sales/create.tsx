import {
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const SalesCreate = (props: any) => {
  // "id": 1,
  // "note": "Satıldı",
  // "price": 2500,
  // "type": 1,
  // "image": "imageurl.jpeg",
  // "reference": 0
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="image" />
        <SelectInput
          source="type"
          choices={[
            { id: 0, name: "Tanımlanmadı" },
            { id: 1, name: "Satış" },
            { id: 2, name: "Alış" },
          ]}
          label="Satış ve Alış"
        />
        <ReferenceInput
          label="Oluşturan Kişi"
          source="createBy"
          reference="users"
        >
          <SelectInput optionText="firstName" label="Oluşturan  Kişi" />
        </ReferenceInput>
        <TextInput source="note" label={"Not"} />
        <NumberInput source="price" label={"Tutar"} />
        <ReferenceInput
          label="Oluşturan Kişi"
          source="reference"
          reference="leads"
        >
          <SelectInput optionText="firstName" label="Oluşturulan leads varsa" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

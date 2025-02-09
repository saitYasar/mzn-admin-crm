import {
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  useShowController,
} from "react-admin";

export const SalesEdit = (props: any) => {
  const { record } = useShowController(props);
  console.log(record);
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="image" fullWidth />
        <SelectInput
          source="type"
          fullWidth
          choices={[
            { id: 0, name: "Tanımlanmadı" },
            { id: 1, name: "Satış" },
            { id: 2, name: "Alış" },
          ]}
          label="Satış ve Alış"
        />
        <ReferenceInput
          label="Oluşturan Kişi"
          fullWidth
          source="createBy"
          reference="users"
        >
          <SelectInput
            fullWidth
            optionText="firstName"
            label="Oluşturan  Kişi"
          />
        </ReferenceInput>
        <TextInput fullWidth source="note" label={"Not"} />
        <NumberInput fullWidth source="price" label={"Tutar"} />
        <ReferenceInput
          fullWidth
          label="Oluşturan Kişi"
          source="reference"
          reference="leads"
        >
          <SelectInput
            fullWidth
            optionText="firstName"
            label="Oluşturulan leads varsa"
          />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

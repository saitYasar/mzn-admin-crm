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
    </Edit>
  );
};

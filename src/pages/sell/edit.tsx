import {
  BooleanInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  useShowController,
} from "react-admin";

export const SellEdit = (props: any) => {
  const { record } = useShowController(props);
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="firstName" label="İsim" />
        <TextInput source="lastName" label="Soy isim" />
        <TextInput source="phone" label="phone" />
        <SelectInput
          source="serviceType"
          label="Hizmet Tipi"
          choices={[
            { id: "0", name: "Tanımlanmadı" },
            { id: "1", name: "Dropshipping" },
            { id: "2", name: "Arbitraj" },
            { id: "3", name: "PrivateLabel" },
            { id: "4", name: "Suspend" },
          ]}
        />
        <ReferenceInput label="Satan Kişi" source="sellerId" reference="users">
          <SelectInput optionText="firstName" label="Satan Kişi" />
        </ReferenceInput>
        <BooleanInput source="isContainGuarantee" label="Garantili mi" />
        <BooleanInput source="isCompleted" label="Satıldı mı" />

        <TextField source="buyLocation" label="Satıldığı Lokasyon" />
        <NumberInput source="bonusAmount" label="Alınan Tutar" />
        <NumberInput source="remainigAmount" label="Kalan Tutar" />
        <NumberInput source="totalAmount" label="Toplam Tutar" />
      </SimpleForm>
    </Edit>
  );
};

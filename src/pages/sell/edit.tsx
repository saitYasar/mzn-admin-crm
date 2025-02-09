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
        <TextInput fullWidth source="firstName" label="İsim" />
        <TextInput fullWidth source="lastName" label="Soy isim" />
        <TextInput fullWidth source="phone" label="phone" />
        <SelectInput
          fullWidth
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
        <ReferenceInput
          fullWidth
          label="Satan Kişi"
          source="sellerId"
          reference="users"
        >
          <SelectInput fullWidth optionText="firstName" label="Satan Kişi" />
        </ReferenceInput>
        <BooleanInput
          fullWidth
          source="isContainGuarantee"
          label="Garantili mi"
        />
        <BooleanInput fullWidth source="isCompleted" label="Satıldı mı" />

        <TextField fullWidth source="buyLocation" label="Satıldığı Lokasyon" />
        <NumberInput fullWidth source="bonusAmount" label="Alınan Tutar" />
        <NumberInput fullWidth source="remainigAmount" label="Kalan Tutar" />
        <NumberInput fullWidth source="totalAmount" label="Toplam Tutar" />
      </SimpleForm>
    </Edit>
  );
};

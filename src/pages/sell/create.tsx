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
  const transform = (formData: any) => ({
    firstName: formData.firstName,
    lastName: formData.lastName,
    phone: formData.phone,
    serviceType: formData.serviceType,
    sellerId: formData.sellerId,
    isCompleted: false,
    isContainGuarantee: formData.isContainGuarantee,
    BuyLocation: formData.BuyLocation,
    bonusAmount: formData.bonusAmount,
    remainigAmount: formData.remainigAmount,
    totalAmount: formData.totalAmount,
    date: new Date(),
  });
  return (
    <Create transform={transform} {...props}>
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
        {/* <TextInput source="BuyLocation" label="Satıldığı Lokasyon" /> */}
        <SelectInput
          fullWidth
          source="BuyLocation"
          label="Satıldığı Lokasyon"
          choices={[
            { id: "stripe", name: "Stripe" },
            { id: "PAYTR", name: "PAYTR" },
            { id: "ELDEN", name: "Elden" },
            { id: "IBAN", name: "IBAN" },
          ]}
        />
        <NumberInput fullWidth source="bonusAmount" label="Alınan Tutar" />
        <NumberInput fullWidth source="remainigAmount" label="Kalan Tutar" />
        <NumberInput fullWidth source="totalAmount" label="Toplam Tutar" />
      </SimpleForm>
    </Create>
  );
};

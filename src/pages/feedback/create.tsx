import {
  BooleanInput,
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const FeedBackCreate = (props: any) => {
  const SelectOptions = [
    { id: 1, name: "Şikayet" },
    { id: 2, name: "Öneri" },
    { id: 3, name: "Övgü" },
  ];
  const SelectOptionss = [
    { id: 1, name: "Geldi" },
    { id: 2, name: "İlgilendim" },
    { id: 3, name: "Çözüm Bulamadım" },
    { id: 4, name: "Çözüldü" },
  ];

  const transform = (formData: any) => ({
    note: formData.note,
    type: formData.type,
    customerName: formData.customerName,
    customerSurname: formData.customerSurname,
    CustomerPhone: formData.CustomerPhone,
    state: formData.state,
    targetUser: formData.targetUser,
    userId: localStorage.getItem("id"),
  });

  return (
    <Create transform={transform} {...props}>
      <SimpleForm>
        <TextInput fullWidth source="note" label="Note" />
        <SelectInput
          fullWidth
          source="type"
          label={"Bildirim Tipi"}
          choices={SelectOptions}
        />
        <TextInput fullWidth source="customerName" label="İsim" />
        <TextInput fullWidth source="customerSurname" label="Soy isim" />
        <TextInput fullWidth source="CustomerPhone" label="Müşteri Tel" />
        <SelectInput
          fullWidth
          source="state"
          label={"Şikayet Durumu"}
          choices={SelectOptionss}
        />
        <ReferenceInput
          fullWidth
          label="HakKında"
          source="targetUser"
          reference="users"
        >
          <SelectInput fullWidth optionText="firstName" label="HakKında" />
        </ReferenceInput>
        <BooleanInput
          fullWidth
          source="didWriteOnComplaint"
          label={"Şikayet Vara yazıldı mı"}
        />
        <TextInput fullWidth source="teacherNote" label="Öğretmen Açıklama" />
      </SimpleForm>
    </Create>
  );
};

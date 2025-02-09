import {
  BooleanInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const FeedBackEdit = (props: any) => {
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

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput fullWidth source="note" label="Note" />
        <TextInput fullWidth source="customerName" label="İsim" />
        <TextInput fullWidth source="customerSurname" label="Soy isim" />
        <TextInput fullWidth source="CustomerPhone" label="Müşteri Tel" />

        <SelectInput
          source="state"
          label={"Şikayet Durumu"}
          choices={SelectOptionss}
          fullWidth
        />

        <SelectInput
          source="type"
          label={"Bildirim Tipi"}
          fullWidth
          choices={SelectOptions}
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
    </Edit>
  );
};

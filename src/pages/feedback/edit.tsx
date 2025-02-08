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
        <TextInput source="note" label="Note" />
        <TextInput source="customerName" label="İsim" />
        <TextInput source="customerSurname" label="Soy isim" />
        <TextInput source="CustomerPhone" label="Müşteri Tel" />

        <SelectInput
          source="state"
          label={"Şikayet Durumu"}
          choices={SelectOptionss}
        />

        <SelectInput
          source="type"
          label={"Bildirim Tipi"}
          choices={SelectOptions}
        />
        <ReferenceInput label="HakKında" source="targetUser" reference="users">
          <SelectInput optionText="firstName" label="HakKında" />
        </ReferenceInput>
        <BooleanInput
          source="didWriteOnComplaint"
          label={"Şikayet Vara yazıldı mı"}
        />
        <TextInput source="teacherNote" label="Öğretmen Açıklama" />
      </SimpleForm>
    </Edit>
  );
};

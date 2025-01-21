import {
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

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="note" placeholder="Note" />

        <SelectInput
          source="type"
          label={"Bildirim Tipi"}
          choices={SelectOptions}
        />
        <TextInput source="customerName" placeholder="İsim" />
        <TextInput source="customerSurname" placeholder="Soy isim" />
        <TextInput source="CustomerPhone" placeholder="Müşteri Tel" />
        <SelectInput
          source="state"
          label={"Şikayet Durumu"}
          choices={SelectOptionss}
        />
        <ReferenceInput label="HakKında" source="targetUser" reference="users">
          <SelectInput optionText="firstName" label="HakKında" />
        </ReferenceInput>
        <ReferenceInput
          label="Bildirimi Alan"
          source="userId"
          reference="users"
        >
          <SelectInput optionText="firstName" label="Bildirimi Alan" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

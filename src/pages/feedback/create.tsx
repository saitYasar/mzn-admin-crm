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

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="note" placeholder="Note" />

        <SelectInput
          source="type"
          label={"Bildirim Tipi"}
          choices={SelectOptions}
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

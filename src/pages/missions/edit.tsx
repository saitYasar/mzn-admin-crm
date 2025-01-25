import {
  DateInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const MissionEdit = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" label="İd" />
        <DateInput source="targetDate" label="Atanma Tarihi" />
        <SelectInput
          source="status"
          label="Durum"
          choices={[
            { id: "0", name: "Yeni Açıldı" },
            { id: "1", name: "İşlemde" },
            { id: "2", name: "Tamamlandı" },
          ]}
        />
        <TextInput source="note" label="Not" />
        <ReferenceInput
          label="Oluşturan Kişi"
          source="baseUser"
          reference="users"
        >
          <SelectInput
            optionText={(record) => `${record.firstName} ${record.lastName}`}
          />
        </ReferenceInput>
        <ReferenceInput
          label="Atanan Kişi"
          source="targetUser"
          reference="users"
        >
          <SelectInput
            optionText={(record) => `${record.firstName} ${record.lastName}`}
          />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

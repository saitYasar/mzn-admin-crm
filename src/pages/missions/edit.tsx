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
        <TextInput fullWidth source="id" label="İd" />
        <DateInput fullWidth source="targetDate" label="Atanma Tarihi" />
        <DateInput fullWidth source="endDate" label="Bitiş Tarihi" />
        <SelectInput
          fullWidth
          source="status"
          label="Durum"
          choices={[
            { id: "0", name: "Yeni Açıldı" },
            { id: "1", name: "İşlemde" },
            { id: "2", name: "Tamamlandı" },
          ]}
        />
        <TextInput fullWidth source="note" label="Not" />
        <ReferenceInput
          fullWidth
          label="Oluşturan Kişi"
          source="baseUser"
          reference="users"
        >
          <SelectInput
            fullWidth
            optionText={(record) => `${record.firstName} ${record.lastName}`}
          />
        </ReferenceInput>
        <ReferenceInput
          fullWidth
          label="Atanan Kişi"
          source="targetUser"
          reference="users"
        >
          <SelectInput
            fullWidth
            optionText={(record) => `${record.firstName} ${record.lastName}`}
          />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

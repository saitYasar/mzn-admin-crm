import {
  DateField,
  ReferenceField,
  SelectField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const MissionsShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" label="İd" />
      <DateField source="createDate" label="Oluşturulma Tarihi" />
      <DateField source="endDate" label="Bitiş Tarihi" />
      <DateField source="targetDate" label="Atanma Tarihi" />
      <SelectField
        source="status"
        label="Durum"
        choices={[
          { id: "0", name: "Yeni Açıldı" },
          { id: "1", name: "İşlemde" },
          { id: "2", name: "Tamamlandı" },
        ]}
      />
      <TextField source="note" label="Not" />
      <ReferenceField
        label="Oluşturan Kişi"
        source="baseUser"
        reference="users"
      >
        <TextField
          style={{ textDecoration: "none", color: "inherit" }}
          source="firstName"
        />{" "}
        <span> </span>
        <TextField
          style={{ textDecoration: "none", color: "inherit" }}
          source="lastName"
        />
      </ReferenceField>
      <ReferenceField label="Atanan Kişi" source="targetUser" reference="users">
        <TextField
          style={{ textDecoration: "none", color: "inherit" }}
          source="firstName"
        />{" "}
        <span> </span>
        <TextField
          style={{ textDecoration: "none", color: "inherit" }}
          source="lastName"
        />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

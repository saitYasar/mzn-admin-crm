import {
  BooleanField,
  DateField,
  ReferenceField,
  SelectField,
  Show,
  SimpleShowLayout,
  TabbedShowLayout,
  TabbedShowLayoutTabs,
  TextField,
  useShowController,
} from "react-admin";

export const FeedBackShow = (props: any) => {
  return (
    <Show {...props}>
      <TabbedShowLayout
        tabs={
          <TabbedShowLayoutTabs variant="scrollable" scrollButtons="auto" />
        }
      >
        <TabbedShowLayout.Tab label="Genel">
          <TextField source="id" label="İd" />
          <TextField source="note" label="Note" />
          <TextField source="customerName" label="İsim" />
          <TextField source="customerSurname" label="Soy İsim" />
          <TextField source="customerPhone" placeholder="Müşteri Tel" />
          <SelectField
            source="type"
            label="Bildirim Tipi"
            choices={[
              { id: 1, name: "Şikayet" },
              { id: 2, name: "Öneri" },
              { id: 3, name: "Övgü" },
            ]}
          />
          <DateField source="createDate" label="Oluşturulma Tarihi" />
          <ReferenceField
            label="HakKında"
            source="targetUser"
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
          <ReferenceField
            label="Bildirimi Alan"
            source="userId"
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
          <SelectField
            source="state"
            label="Durum"
            choices={[
              { id: 1, name: "Geldi" },
              { id: 2, name: "İlgilendim" },
              { id: 3, name: "Çözüm Bulamadım" },
              { id: 4, name: "Çözüldü" },
            ]}
          />
          <BooleanField
            source="didWriteOnComplaint"
            label={"Şikayet Vara yazıldı mı"}
          />
          <TextField source="teacherNote" placeholder="Öğretmen Açıklama" />
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};

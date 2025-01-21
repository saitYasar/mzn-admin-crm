import {
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
  // "id": 1,
  //           "userId": 1,
  //           "targetUser": 1,
  //           "note": "Bence salih saiti kovacak",
  //           "createDate": "2025-01-14T00:00:00",
  //           "type": 0,
  //           "customerName": "",
  //           "customerSurname": "",
  //           "customerPhone": "",
  //           "state": 0
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
          <TextField source="CustomerPhone" placeholder="Müşteri Tel" />

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
            <TextField source="firstName" /> <span> </span>
            <TextField source="lastName" />
          </ReferenceField>
          <ReferenceField
            label="Bildirimi Alan"
            source="userId"
            reference="users"
          >
            <TextField source="firstName" /> <span> </span>
            <TextField source="lastName" />
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
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};

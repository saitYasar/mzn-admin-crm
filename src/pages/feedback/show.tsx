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
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};

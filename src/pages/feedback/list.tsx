import {
  List,
  downloadCSV,
  Datagrid,
  TextField,
  Filter,
  TextInput,
  ShowButton,
  DateField,
  SelectField,
  SelectInput,
  DateInput,
  ReferenceField,
  ReferenceInput,
} from "react-admin";
import jsonExport from "jsonexport/dist";
import { Role } from "../../lib/enum/enums";

const PostFilter = (props: any) => (
  <Filter {...props}>
    <SelectInput
      source="type"
      label="Bildirim Tipi"
      choices={[
        { id: 1, name: "Şikayet" },
        { id: 2, name: "Öneri" },
        { id: 3, name: "Övgü" },
      ]}
      alwaysOn
    />

    <DateInput
      label="Oluşturulma Tarihi Başlangıç"
      source="day__gte"
      alwaysOn
    />
    <DateInput label="Oluşturulma Tarihi Son" source="day__lte" alwaysOn />
    <ReferenceInput label="HakKında" source="targetUser" reference="users">
      <SelectInput optionText="firstName" label="HakKında" />
    </ReferenceInput>
    <ReferenceInput label="Bildirimi Alan" source="userId" reference="users">
      <SelectInput optionText="firstName" label="Bildirimi Alan" />
    </ReferenceInput>
  </Filter>
);

const exporter = (posts: any) => {
  const postsForExport = posts.map((post: any) => {
    const { ...postForExport } = post; // omit backlinks and author
    postForExport.isim = post.firstName; // add a field
    postForExport.soyisim = post.username; // add a field
    postForExport.email = post.email; // add a field
    postForExport.telefon = post.phone; // add a field
    postForExport.rol = Role[post.role]; // add a field
    delete postForExport.firstName; // remove a field
    delete postForExport.role;
    delete postForExport.username; // remove a field
    delete postForExport.phone; // remove a field

    return postForExport;
  });
  jsonExport(postsForExport, {}, (err, csv) => {
    downloadCSV(csv, "users");
  });
};
export const FeedbackList = (props: any) => (
  <List {...props} filters={<PostFilter />} exporter={exporter}>
    <Datagrid>
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
      <ReferenceField label="HakKında" source="targetUser" reference="users">
        <TextField source="firstName" /> <span> </span>
        <TextField source="lastName" />
      </ReferenceField>
      <ReferenceField label="Bildirimi Alan" source="userId" reference="users">
        <TextField source="firstName" /> <span> </span>
        <TextField source="lastName" />
      </ReferenceField>
      <ShowButton />
    </Datagrid>
  </List>
);

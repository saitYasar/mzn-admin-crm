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
  BooleanField,
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
    <ReferenceInput
      label="HakKında"
      source="targetUser"
      reference="users"
      alwaysOn
    >
      <SelectInput optionText="firstName" label="HakKında" />
    </ReferenceInput>
    <ReferenceInput
      label="Bildirimi Alan"
      source="userId"
      reference="users"
      alwaysOn
    >
      <SelectInput optionText="firstName" label="Bildirimi Alan" alwaysOn />
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
export const FeedbackList = (props: any) => {
  const filter = localStorage.getItem("id");
  const isAdmin = localStorage.getItem("role");
  return (
    <List
      {...props}
      filters={<PostFilter />}
      exporter={exporter}
      filter={isAdmin !== "2" && { targetUser: filter }}
    >
      <Datagrid>
        <TextField source="id" label="İd" />
        <TextField source="customerName" label="İsim" />
        <TextField source="customerSurname" label="Soy İsim" />
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
        <ReferenceField
          label="Bildirimi Alan"
          source="userId"
          reference="users"
        >
          <TextField
            source="firstName"
            style={{ textDecoration: "none", color: "inherit" }}
          />{" "}
          <span> </span>
          <TextField
            source="lastName"
            style={{ textDecoration: "none", color: "inherit" }}
          />
        </ReferenceField>
        <BooleanField
          source="didWriteOnComplaint"
          label={"Şikayet Vara yazıldı mı"}
        />
        <TextField source="teacherNote" placeholder="Öğretmen Açıklama" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

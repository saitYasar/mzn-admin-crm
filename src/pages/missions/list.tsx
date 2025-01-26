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
  ReferenceField,
  ReferenceInput,
  SelectInput,
  DateInput,
  EditButton,
  DeleteButton,
} from "react-admin";
import jsonExport from "jsonexport/dist";
import { Role } from "../../lib/enum/enums";

const PostFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="İsim" source="firstName" alwaysOn />
    <TextInput label="Soyisim" source="username" alwaysOn />
    <ReferenceInput
      label="Oluşturan Kişi"
      source="baseUser"
      reference="users"
      alwaysOn
    >
      <SelectInput optionText="firstName" label={"Oluşturan Kişi"} />
    </ReferenceInput>
    <ReferenceInput
      label="Atanan Kişi"
      source="targetUser"
      reference="users"
      alwaysOn
    >
      <SelectInput optionText="firstName" label={"Atanan Kişi"} />
    </ReferenceInput>
    <DateInput
      label="Oluşturulma Tarihi Başlangıç"
      source="day__gte"
      alwaysOn
    />
    <DateInput label="Oluşturulma Tarihi Son" source="day__lte" alwaysOn />
  </Filter>
);

const exporter = (posts: any) => {
  const postsForExport = posts.map((post: any) => {
    const { ...postForExport } = post; // omit backlinks and author
    postForExport.isim = post.firstName;
    postForExport.soyisim = post.username;
    postForExport.email = post.email;
    postForExport.telefon = post.phone;
    postForExport.rol = Role[post.role];
    delete postForExport.firstName;
    delete postForExport.role;
    delete postForExport.username;
    delete postForExport.phone;

    return postForExport;
  });
  jsonExport(postsForExport, {}, (err, csv) => {
    downloadCSV(csv, "users");
  });
};
export const MissionList = (props: any) => (
  <List {...props} filters={<PostFilter />} exporter={exporter}>
    <Datagrid>
      <TextField source="id" label="İd" />
      <DateField source="createDate" label="Oluşturulma Tarihi" />
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
          source="firstName"
          style={{ textDecoration: "none", color: "inherit" }}
        />{" "}
        <span> </span>
        <TextField
          style={{ textDecoration: "none", color: "inherit" }}
          source="lastName"
        />
      </ReferenceField>
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

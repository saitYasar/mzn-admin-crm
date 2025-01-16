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
  ImageField,
} from "react-admin";
import jsonExport from "jsonexport/dist";
import { Role } from "../../lib/enum/enums";

const PostFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="İsim" source="firstName" alwaysOn />
    <TextInput label="Soyisim" source="username" alwaysOn />
    <SelectInput
      source="Role"
      label="Rol"
      choices={[
        { id: 1, name: "Dropshipping" },
        { id: 2, name: "DropshippingLider" },
        { id: 3, name: "Arbitraj" },
        { id: 4, name: "ArbitrajLider" },
        { id: 5, name: "Satis" },
        { id: 6, name: "SatisLider" },
        { id: 7, name: "SosyalMedya" },
        { id: 8, name: "SosyalMedyaLider" },
        { id: 9, name: "PrivateLabel" },
        { id: 10, name: "PrivateLabelLider" },
        { id: 11, name: "Suspend" },
        { id: 12, name: "SuspendLider" },
        { id: 13, name: "Admin" },
      ]}
      alwaysOn
    />
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
export const UserList = (props: any) => (
  <List {...props} filters={<PostFilter />} exporter={exporter}>
    <Datagrid>
      <TextField source="id" label="İd" />
      <TextField source="firstName" label="İsim" />
      <TextField source="lastName" label="İkinci İsim" />
      {/* <TextField source="username" label="Soyİsim" /> */}
      {/* <TextField source="email" label="Email" /> */}
      <TextField source="phone" label="Telefon" />
      {/* <DateField source="createDate" label="Oluşturulma Tarihi" /> */}
      <SelectField
        source="role"
        label="Rol"
        choices={[
          { id: 1, name: "Dropshipping" },
          { id: 2, name: "DropshippingLider" },
          { id: 3, name: "Arbitraj" },
          { id: 4, name: "ArbitrajLider" },
          { id: 5, name: "Satis" },
          { id: 6, name: "SatisLider" },
          { id: 7, name: "SosyalMedya" },
          { id: 8, name: "SosyalMedyaLider" },
          { id: 9, name: "PrivateLabel" },
          { id: 10, name: "PrivateLabelLider" },
          { id: 11, name: "Suspend" },
          { id: 12, name: "SuspendLider" },
          { id: 13, name: "Admin" },
        ]}
      />
      <ImageField source="image" label="Fotoğraf" />
      <ShowButton />
    </Datagrid>
  </List>
);

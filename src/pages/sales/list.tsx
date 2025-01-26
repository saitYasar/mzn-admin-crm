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
  EditButton,
  DeleteButton,
  SelectInput,
  DateInput,
  ImageField,
  ReferenceField,
  NumberField,
} from "react-admin";
import jsonExport from "jsonexport/dist";
import { Role } from "../../lib/enum/enums";

const PostFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="İsim" source="firstName" alwaysOn />
    <TextInput label="Soyisim" source="username" alwaysOn />
    <SelectInput
      source="type"
      label="Müşteri Tipi"
      choices={[
        { id: "", name: "Tümü" },
        { id: 1, name: "Dropshipping" },
        { id: 2, name: "Arbitraj" },
        { id: 3, name: "PrivateLabel" },
        { id: 4, name: "Suspend" },
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

// {
//   "id": 1,
// "reference": 0
// }
export const SaleList = (props: any) => (
  <List {...props} filters={<PostFilter />} exporter={exporter}>
    <Datagrid>
      <TextField source="id" label="İd" />
      <ImageField src="image" />
      <SelectField
        source="type"
        label="Satış ve Alış"
        choices={[
          { id: 0, name: "Tanımlanmadı" },
          { id: 1, name: "Satış" },
          { id: 2, name: "Alış" },
        ]}
      />
      <ReferenceField
        label="Oluşturan Kişi"
        source="createBy"
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
      <DateField source="createDate" />
      <TextField source="note" label="Not" />
      <NumberField source="price" />
      <ReferenceField
        label="Referans Leads"
        source="reference"
        reference="leads"
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
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

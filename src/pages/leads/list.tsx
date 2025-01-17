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

// {
//     "id": 3,
//     "firstName": "Batuhan",
//     "lastName": "Diler",
//     "email": "diler@gmail.com",
//     "phone": "0531313131",
//     "status": "0",
//     "call": "1",
//     "images": "example",
//     "reference": 1,
//     "createDate": "2025-01-12T00:00:00"
// }
export const LeadsList = (props: any) => (
  <List {...props} filters={<PostFilter />} exporter={exporter}>
    <Datagrid>
      <TextField source="id" label="İd" />
      <TextField source="firstName" label="İsim" />
      <TextField source="lastName" label="Soyisim" />
      <TextField source="email" label="email" />
      <TextField source="phone" label="Telefon" />
      <SelectField
        source="status"
        label="Müşteri Durumu"
        choices={[
          { id: "0", name: "Yeni" },
          { id: "1", name: "Yeni" },
          { id: "2", name: "İletişimde" },
          { id: "3", name: "Takipte" },
          { id: "4", name: "İlgili" },
          { id: "5", name: "Pazarlıkta" },
          { id: "6", name: "Satış Tamamlandı" },
          { id: "7", name: "Kaybedildi" },
          { id: "8", name: "Niteliksiz" },
        ]}
      />
      <SelectField
        source="type"
        label="Müşteri Tipi"
        choices={[
          { id: 0, name: "Tanımlanmadı" },
          { id: 1, name: "Dropshipping" },
          { id: 2, name: "Arbitraj" },
          { id: 3, name: "PrivateLabel" },
          { id: 4, name: "Suspend" },
        ]}
      />
      <DateField source="createDate" label="Oluşturulma Tarihi" />
      <TextField source="price" label="Teklif" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

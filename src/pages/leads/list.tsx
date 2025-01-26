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
import { Role, Type } from "../../lib/enum/enums";

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
export enum Status {
  Yeni = "0",
  Iletisimde = "2",
  Takipte = "3",
  Ilgili = "4",
  Pazarlikta = "5",
  SatisTamamlandi = "6",
  Kaybedildi = "7",
  Niteliksiz = "8",
}

const exporter = (posts: any) => {
  const postsForExport = posts.map((post: any) => {
    const { ...postForExport } = post; // omit backlinks and author
    postForExport.isim = post.firstName;
    postForExport.soyisim = post.lastName;
    postForExport.mail = post.email;
    postForExport.tel_no = post.phone;
    postForExport.status = Status[post.status as keyof typeof Status];
    postForExport.tip = Type[post.type];
    postForExport.fiyat = post.price;

    delete postForExport.firstName;
    delete postForExport.lastName;
    delete postForExport.email;
    delete postForExport.phone;
    delete postForExport.status;
    delete postForExport.type;
    delete postForExport.price;

    return postForExport;
  });
  jsonExport(postsForExport, {}, (err, csv) => {
    downloadCSV(csv, "users");
  });
};

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
